import {ServerResponse} from 'http'
import {users} from '../data/usersData.js'
import {sendResponse} from '../utils/index.js'

export const getOneUser = async (id: string, res: ServerResponse): Promise<void> => {
  const user = users[id] ? {id, ...users[id]} : null
  if (user) {
    await sendResponse(res, 200, user)
  } else {
    await sendResponse(res, 404, {error: `user with id-${id} not found`})
  }
}
