import {validate} from 'uuid'
import {ServerResponse} from 'http'
import {settings} from '../settings'
import {sendResponse} from './sendResponse'


export const getId = async (url: string, res: ServerResponse): Promise<string> => {
  const id = url.split(settings.URL + '/')[1]
  if (id && validate(id)) {
    return id
  } else {
    await sendResponse(res, 400, {error: 'userId invalid, not a valid uuid'})
    return ''
  }
}
