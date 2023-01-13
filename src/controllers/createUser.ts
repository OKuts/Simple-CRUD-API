import {v4 as uuidv4} from 'uuid'
import {users} from '../data/usersData'
import {IMessage, IUserProp} from '../interfaces'

export const createUser = async (body: IUserProp): Promise<IMessage> => {
  const id = uuidv4()
  users.push({id, ...body})
  return {status: 201, data: {id, ...body}, returnedUsers: users}
}
