export interface IUserProp {
  username: string
  age: number
  hobbies: string[]
}

export interface IUser  {
  [id: string]: IUserProp
}

export interface IUserRequest extends IUserProp {
  id: string
}
