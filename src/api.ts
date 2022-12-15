import {IncomingMessage, ServerResponse} from "http"
import {getId} from './utils/getId.js'
import {sendResponse} from './utils/sendResponse.js'
import {createUser} from "./controllers/createUser.js";

export const api = async (req: IncomingMessage, res: ServerResponse) => {
  const method = req.method as string
  const url = req.url as string
  const isValidUrl = url.startsWith('/api/user')
  if (!isValidUrl) await sendResponse(res, 404, {error: 'Route Not Found'})

  const id = getId(url)

  if (method === 'GET' && !id) {
    res.end('GET+')
  } else if (method === 'GET' && id) {
    res.end('GET++++++++++')
  } else if (method === 'POST' && id) {
    res.end('POST+')
  } else if (method === 'POST') {
    await createUser(req, res)
  } else if (method === 'PUT' && id) {
    res.end('PUT')
  } else if (method === 'DELETE' && id) {
    res.end('DELETE')
  } else {
    await sendResponse(res, 404, {error: 'Route Not Found'})
  }
}
