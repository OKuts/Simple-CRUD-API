import {IncomingMessage, ServerResponse} from 'http'

import {users} from '../data/usersData.js'
import {getClientDataError, sendResponse} from '../utils/index.js'
import {IUserProp} from '../interfaces/IUser.js'

export const updateUser = async (id: string, req: IncomingMessage, res: ServerResponse): Promise<void> => {
  let body = ''

  req.on('data', (chunk: Buffer) => {
    body += chunk.toString()
  })

  req.on('end', async () => {
    const clientData = JSON.parse(body) as IUserProp
    const errorMessage = getClientDataError(clientData)
    if (errorMessage) await sendResponse(res, 400, {error: errorMessage})
    if (users[id]) {
      users[id] = clientData
      res.statusCode = 200
      res.end()
    } else {
      await sendResponse(res, 404, {error: `user with id-${id} not found`})
    }
  })
}
