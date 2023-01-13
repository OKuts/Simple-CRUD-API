import {users} from '../data/usersData'
import {IUserProp, IMessage} from '../interfaces'

export const updateUser = async (id: string, body: IUserProp): Promise<IMessage> => {
  const index = users.findIndex(user => user.id === id)
  if (index !== -1) {
    users[index] = {id, ...body}
    return {status: 200, data: users[index], returnedUsers: users}
  }
  return {status: 400, message: `user with id-${id} not found`}
}
