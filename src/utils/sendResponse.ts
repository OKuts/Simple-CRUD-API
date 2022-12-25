import {ServerResponse} from 'http'
export const sendResponse = async (res: ServerResponse, statusCode: number, body: object): Promise<void> => {
  res.writeHead(statusCode, {'Content-Type': 'application/json'})
  res.end(JSON.stringify(body))
}
