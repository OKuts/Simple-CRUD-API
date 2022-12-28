import cluster from 'cluster'
import {cpus} from 'os'
import {settings} from '../settings.js'

export const masterProcess = (): void => {
  if (process.argv.includes('--balancer')) {
    const cpusCount = cpus().length
    const workers: any[] = []
    for (let i = 0; i < cpusCount; i++) {
      const worker = cluster.fork({portNum: +settings.PORT + 1 + i})
      workers.push(worker)

      worker.on('message', msg => {
        if (msg.returnedUsers) {
          workers.forEach(wk => wk.send({updatedUsers: msg.returnedUsers}))
        }
      })
    }
  }
}
