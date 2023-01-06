import {IMessage} from '../interfaces/IMessage.js'
import {users} from '../data/usersData.js'

export const getAllUsers = async (): Promise<IMessage> => ({status: 200, data: users})
