import {users} from '../data/usersData.js'
import {IMessage} from "../interfaces/IMessage.js";

export const deleteUser = async (id: string): Promise<IMessage> => {
  if (users[id]) {
    delete users[id]
    return {status: 200, data: {id, ...users[id]}}
  } else {
    return {status: 400, message: `user with id-${id} not found`}
  }
}
