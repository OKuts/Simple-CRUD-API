import {IUser, IUserProp, IUserRequest} from "./IUser.js";

export interface IMessage {
  status: number,
  message?: string,
  data?: IUserRequest | IUserRequest[]
}
