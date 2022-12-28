import cluster from 'cluster'
import {cpus} from 'os'
import http from 'http'

import {settings} from './settings.js'
import {listener} from './listener.js'
import {router} from "./router.js";
import {masterProcess} from "./processes/masterProcess.js";
import {workerProcess} from "./processes/workerProcess.js";

const pid = process.pid
const PORT = +settings.PORT
const server = http.createServer(listener)

const run = async () => {
  if (process.argv.includes('--balancer')) {
    if (cluster.isPrimary) {
      server.listen(PORT, () => {console.log(`Master run on PORT ${PORT}`)})
      masterProcess()
    } else {
      const port = process.env['portNum']
      server.listen(port, () => {console.log(`Worker run on PORT ${port} : ${pid}`)})
      workerProcess()
    }
  } else {
    server.listen(PORT, () => {
      console.log(`Server run on PORT ${PORT} : ${pid}`)
    })
  }
}

run()
