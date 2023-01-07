import {users} from '../data/usersData'
import {IMessage} from '../interfaces'


export const deleteUser = async (id: string): Promise<IMessage> => {
  const index: any = users.findIndex(user => user.id === id)
  if (index !== -1) {
    const out = users.splice(index, 1)
    return {status: 204, data: out[0], returnedUsers: users}
  }
  return {status: 400, message: `user with id-${id} not found`}
}
