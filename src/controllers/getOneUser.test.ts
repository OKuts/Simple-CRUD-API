import {users} from '../data/usersData.js'
import {getOneUser} from './getOneUser.js'

describe('try tests', () => {
  users.push({id: '1', username: 'Alex', age: 53, hobbies: ['js', 'ts']})
  it('get one user', () => {
    expect(getOneUser('1')).toEqual(
      Promise.resolve({
        status: 200, data: {id: '1', username: 'Alex', age: 53, hobbies: ['js', 'ts']}
      }))
  })
})


