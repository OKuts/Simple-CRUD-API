export interface IUserProp {
  username: string
  age: number
  hobbies: string[]
}

export interface IUser extends IUserProp {
  id: string
}
