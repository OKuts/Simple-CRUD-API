import {ServerResponse} from 'http'
import {users} from '../data/usersData.js'
import {sendResponse} from '../utils/index.js'

export const deleteUser = async (id: string, res: ServerResponse): Promise<void> => {
  if (users[id]) {
    delete users[id]
    res.statusCode = 204
    res.end()
  } else {
    await sendResponse(res, 404, {error: `user with id-${id} not found`})
  }
}
