import {ServerResponse} from 'http'
import {users} from '../data/usersData.js'
import {sendResponse} from '../utils/index.js'

export const getAllUsers = async (res: ServerResponse): Promise<void> => {
  const usersArr = Object.keys(users).map(id => ({id, ...users[id]}))
  await sendResponse(res, 200, usersArr)
}
