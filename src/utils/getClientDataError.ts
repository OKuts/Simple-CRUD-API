import {IUserProp} from '../interfaces/IUser.js'

export const getClientDataError = (clientData: IUserProp): string => {
  let clientDataErrors = []
  if (typeof clientData.username !== 'string' || !clientData.username)
    clientDataErrors.push('username')
  if (typeof clientData.age !== 'number' || !clientData.age) clientDataErrors.push('age')
  if (!Array.isArray(clientData.hobbies)) {
    clientDataErrors.push('hobbies')
  } else if (
    !(clientData.hobbies.length === 0
    || clientData.hobbies.every(hobby => typeof hobby === 'string' ))) {
    clientDataErrors.push('hobbies')
  }

  return clientDataErrors.length ? `Not valid: ${clientDataErrors.join(', ')}`: ''
}
