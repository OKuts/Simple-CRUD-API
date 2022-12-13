import  http, {IncomingMessage, ServerResponse} from 'http'
import {settings} from './settings.js'
import {api} from './api.js'

const PORT = settings.PORT

const server = http.createServer(async (req: IncomingMessage, res: ServerResponse) => {
  await api(req, res)
  console.log(22222222222555)
})

server.listen(PORT, () => console.log(`Server listening on ${PORT}`))
