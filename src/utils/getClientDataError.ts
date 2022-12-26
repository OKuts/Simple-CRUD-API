import {IUserProp} from '../interfaces/IUser.js'

export const getClientDataError = async (clientData: IUserProp): Promise<string> => {
  const clientDataErrors = []
  if (!clientData.username)
    clientDataErrors.push('username')
  if (!clientData.age) clientDataErrors.push('age')
  if (!Array.isArray(clientData.hobbies)) {
    clientDataErrors.push('hobbies')
  }

  return clientDataErrors.length ? `Not valid: ${clientDataErrors.join(', ')}` : ''
}
