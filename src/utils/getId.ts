import {validate} from 'uuid'
export const getId = (url: string): string => {
  const id = url.slice(url.lastIndexOf('/') + 1)
  return validate(id) ? id : ''
}
