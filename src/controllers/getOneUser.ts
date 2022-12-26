import {users} from '../data/usersData.js'
import {IMessage} from '../interfaces/IMessage.js'

export const getOneUser = async (id: string): Promise<IMessage> => {
  const user = users[id] ? {id, ...users[id]} : null
  return user ? {status: 200, data: user} : {status: 404, message: `user with id-${id} not found`}
}
