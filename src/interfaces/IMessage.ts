import {IUser} from "./IUsers.js";

export interface IMessage {
  status: number,
  message?: string,
  data?: IUser | IUser[],
  returnedUsers?: IUser[]
}
