import {IncomingMessage, ServerResponse} from 'http'

import {settings} from './settings.js'
import {getId, sendResponse} from './utils/index.js'
import {createUser, deleteUser, getAllUsers, getOneUser} from './controllers/index.js'

export const api = async (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method as string
  const url = (req.url as string).replace(/([%20]+$)|(\/([%20]*)$)/, '')
  const isValidUrl = url.startsWith('/api/user')
  if (!isValidUrl) await sendResponse(res, 404, {error: 'Route Not Found'})

  const id = url.length !== settings.URL.length ? await getId(url, res) : ' '
  console.log('id', id, 'url', url)

  if (method === 'GET' && id === ' ') {
    await getAllUsers(res)
  } else if (method === 'GET' && id !== ' ') {
    await getOneUser(id, res)
  } else if (method === 'POST' && id !== ' ') {
    res.end('POST+')
  } else if (method === 'POST') {
    await createUser(req, res)
  } else if (method === 'PUT' && id !== ' ') {
    res.end('PUT')
  } else if (method === 'DELETE' && id !== ' ') {
    await deleteUser(id, res)
  } else {
    await sendResponse(res, 404, {error: 'Route Not Found'})
  }
}
