import {IncomingMessage, ServerResponse} from 'http'
import cluster from 'cluster'

import {settings} from './settings.js'
import {getClientDataError, getId, sendResponse} from './utils/index.js'
import {balancer} from './balancer/balancer.js'
import {router} from './router.js'
import {IMessage} from './interfaces/IMessage.js'
import {IUserProp} from './interfaces/IUsers.js'

export const listener = async (req: IncomingMessage, res: ServerResponse) => {
  try {
    const url = (req.url as string).replace(/([%20]+$)|(\/([%20]*)$)/, '')
    const isValidUrl = url.startsWith(settings.URL)
    if (!isValidUrl) await sendResponse(res, 404, {error: 'Route Not Found'})

    const id = url.length !== settings.URL.length ? await getId(url, res) : ' '
    const method = req.method as string

    let acc = ''
    let body: IUserProp
    req.on('data', (chunk: Buffer) => {
      acc += chunk.toString()
    })

    req.on('end', async () => {
      if (method === 'POST' || method === 'PUT') {
        const clientData = JSON.parse(acc) as IUserProp
        const errorMessage = await getClientDataError(clientData)
        if (errorMessage) {
          await sendResponse(res, 400, {error: errorMessage})
        } else {
          body = clientData
        }
      }

      balancer(body, id, method)
      if (cluster.workers && Object.entries(cluster.workers).length) {
        for (const worker of Object.values(cluster.workers)) {
          worker?.once('message', async (msg: IMessage) => {
            await sendResponse(res, msg.status, msg.message ? {error: msg.message} : msg.data || [])
          })
        }
      } else {
        const msg = await router(method, id, body)
        await sendResponse(res, msg.status, msg.message ? {error: msg.message} : msg.data || [])
      }
    })
  } catch
    (err) {
    if (err instanceof Error)
      await sendResponse(res, 404, {error: `Internal Server Error: ${err.message}`})
  }
}
