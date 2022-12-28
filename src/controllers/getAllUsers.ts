import {users} from '../data/usersData.js'
import {IMessage} from '../interfaces/IMessage.js'

export const getAllUsers = async (): Promise<IMessage> => ({status: 200, data: users})
