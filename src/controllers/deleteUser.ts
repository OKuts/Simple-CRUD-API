import {users} from '../data/usersData.js'
import {IMessage} from "../interfaces/IMessage.js";

export const deleteUser = async (id: string): Promise<IMessage> => {
  const index = users.findIndex(user => user.id === id)
  if (index !== -1) {
    const out = users.splice(index, 1)
    return {status: 200, data: out[0], returnedUsers: users}
  }
  return {status: 400, message: `user with id-${id} not found`}
}
