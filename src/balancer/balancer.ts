import cluster from 'node:cluster'
import {IUserProp} from '../interfaces/IUser.js'
import {getNextWorker} from './getNextWorker.js'

export const balancer = ( body: IUserProp | null, url: string, method: string ) => {
  const nextWorker = getNextWorker()

  if (cluster.workers && Object.entries(cluster.workers).length) {
    for (const worker of Object.values(cluster.workers)) {
      if (worker?.id === nextWorker) {
        console.log(`Current worker - id: ${worker?.id}, pid: ${worker.process.pid}`)
        worker?.send({ body, url, method })
      }
    }
  }
}
