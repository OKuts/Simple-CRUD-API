import {
  createUser, deleteUser, getAllUsers, getOneUser, updateUser
} from './controllers/index.js'
import {IUserProp} from "./interfaces/IUsers.js";
import {IMessage} from "./interfaces/IMessage.js";

export const router = async (method: string, id: string, body: IUserProp | null): Promise<IMessage> => {

  if (method === 'GET' && id === ' ') {
    return await getAllUsers()
  } else if (method === 'GET' && id && id !== ' ') {
    return await getOneUser(id)
  } else if (method === 'POST' && body) {
    return await createUser(body)
  } else if (method === 'PUT' && id && body) {
    return await updateUser(id, body)
  } else if (method === 'DELETE' && id) {
    return await deleteUser(id)
  } else {
    return {status: 404, message: "Resource not found"}
  }
}
