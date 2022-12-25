import cluster from 'cluster'
import {cpus} from 'os'
import http from 'http'
import {api} from './api.js'
import {settings} from './settings.js'

const pid = process.pid
const PORT = +settings.PORT
const server = http.createServer(api)

const run = async () => {
  if (process.argv.includes('--balancer')) {
    if (cluster.isPrimary) {
      const cpusCount = cpus().length
      server.listen(PORT, () => {console.log(`Master run on PORT ${PORT} : ${pid}`)})
      for (let i = 0; i < cpusCount; i++) {
        const worker = cluster.fork({portNum: PORT + 1 + i})
        worker.on('exit', () => {
          cluster.fork()
        })
      }
    } else {
      const port = process.env['portNum']
      server.listen(port, () => {console.log(`Worker run on PORT ${port} : ${pid}`)})
      process.on('message', async (message) => {
        // const { status, msg } = await router(message);
        // process.send && process.send({ status, msg });
        console.log(message)
      })
    }
  } else {
    server.listen(PORT, () => {console.log(`Server run on PORT ${PORT} : ${pid}`)})
  }
}

run()
