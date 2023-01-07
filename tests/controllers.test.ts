import {createUser, getOneUser, getAllUsers} from '../src/controllers'
import {IMessage, IUser, IUserProp} from '../src/interfaces'
import {users} from '../src/data/usersData'

describe('controllers tests', () => {
  users.length = 0
  let id: string = ''

  it('when trying to get all users, an empty array is returned', async () => {
    const result: IMessage = await getAllUsers()
    expect(result['status']).toEqual(200)
    expect(Array.isArray(result.data)).toEqual(true)
    expect(result.data).toEqual([])
  })

  it('when trying to create a new user, a user object is returned', async () => {
    const fakeUser: IUserProp = {username: 'Alex', age: 53, hobbies: ['js', 'ts']}
    const result: IMessage = await createUser(fakeUser)
    if (result.data) {
      const data = result.data as IUser
      id = data.id
      expect(data.username).toEqual('Alex')
      expect(data.age).toEqual(53)
      expect(data.hobbies).toEqual(['js', 'ts'])
      expect(Array.isArray(data.hobbies)).toEqual(true)
    }
    expect(result.status).toEqual(201)
  })

  it('async', async () => {
    const result = await getOneUser('5813d139-4b2c-4aac-b623-7ce7bd55f8d4')
    expect(result['status']).toEqual(404)
  })

  it('get one user', () => {
    expect(getOneUser(id)).toEqual(
      Promise.resolve({
        status: 200, data: {id, username: 'Alex', age: 53, hobbies: ['js', 'ts']}
      }))
  })

  it('get none user', () => {
    expect(getOneUser('none')).toEqual(
      Promise.resolve({status: 404, message: `user with id-none not found`}))
  })

})


