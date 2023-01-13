import {IMessage} from '../interfaces'
import {users} from '../data/usersData'

export const getAllUsers = async (): Promise<IMessage> => ({status: 200, data: users})
