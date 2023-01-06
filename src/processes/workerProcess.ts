import {router} from '../router'
import {users} from '../data/usersData'
export const workerProcess = (): void => {
  process.on('message', async ({method, id, body, updatedUsers}) => {
    if (method) {
      const {status, data, returnedUsers} = await router(method, id, body)
      process.send && process.send({status, data, returnedUsers})
    } else {
      users.length = 0
      users.push(...updatedUsers)
    }
  })
}
