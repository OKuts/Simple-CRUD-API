import {users} from '../data/usersData.js'
import {getClientDataError, sendResponse} from '../utils/index.js'
import {IUserProp} from '../interfaces/IUser.js'
import {IMessage} from "../interfaces/IMessage.js";

export const updateUser = async (id: string, body: IUserProp): Promise<IMessage> => {
  if (users[id]) {
    users[id] = {...body}
    return {status: 200, data: {id, ...body}}
  } else {
    return {status: 404, message: `user with id-${id} not found`}
  }
}
