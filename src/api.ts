import {IncomingMessage, ServerResponse} from "http"
import {parseUrl} from './utils/parseUrl.js'
export const api = async (req: IncomingMessage, res: ServerResponse) => {
  // const method = req.method as string
  const url = req.url as string
  const [baseUrl, id] = parseUrl(url)

  console.log('hello', url, baseUrl, id)
  // if (url === baseUrl) {
  //
  // }
  console.log(77777777777)
  res.end()
}
