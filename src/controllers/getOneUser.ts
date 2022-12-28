import {users} from '../data/usersData.js'
import {IMessage} from '../interfaces/IMessage.js'

export const getOneUser = async (id: string): Promise<IMessage> => {
  const index = users.findIndex(user => user.id === id)
  return index !== -1
    ? {status: 200, data: users[index]}
    : {status: 404, message: `user with id-${id} not found`}
}
