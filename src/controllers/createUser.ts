import {v4 as uuidv4} from 'uuid'
import {IUserProp} from '../interfaces/IUsers.js'
import {users} from '../data/usersData.js'
import {IMessage} from "../interfaces/IMessage.js";

export const createUser = async (body: IUserProp): Promise<IMessage> => {
  const id = uuidv4()
  users.push({id, ...body})
  return {status: 200, data: {id, ...body}, returnedUsers: users}
}
