import {IUser} from './'

export interface IMessage {
  status: number,
  message?: string,
  data?: IUser | IUser[],
  returnedUsers?: IUser[]
}
