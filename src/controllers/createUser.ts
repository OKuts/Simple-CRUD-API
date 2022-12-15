import {IncomingMessage, ServerResponse} from 'http'
import { v4 as uuidv4 } from 'uuid'
import {IUserProp} from '../interfaces/IUser.js'
import {getClientDataError, sendResponse} from "../utils/index.js";
import {users} from '../data/usersData.js'

export const createUser = async (req: IncomingMessage, res: ServerResponse): Promise<void> => {
  let body = ''

  req.on('data', (chunk: Buffer) => {
    body += chunk.toString()
  })

  req.on('end', async () => {
    const clientData = JSON.parse(body) as IUserProp
    const errorMessage = getClientDataError(clientData)
    if (!errorMessage) {
      const id = uuidv4()
      users[id] = clientData
      await sendResponse(res, 200, {id, ...clientData})
    } else {
      await sendResponse(res, 400, {error: errorMessage})
    }
  })
}
