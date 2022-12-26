import {users} from '../data/usersData.js'
import {IMessage} from '../interfaces/IMessage.js'

export const getAllUsers = async (): Promise<IMessage> => {
  const usersArr = Object.keys(users).map(id => ({id, ...users[id]}))
  return {status: 200, data: usersArr}
}
