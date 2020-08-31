import { Exception } from './exceptions'

export interface Response {
  statusCode: number
  body: string
}

export const handleResponse = <T>(payload: T): Response => {
  console.log(`test fred ${JSON.stringify(payload)}`)
  return {
    statusCode: 200,
    body: JSON.stringify({
      ...payload,
    }),
  }
}

export const handleErrorResponse = (error: Exception): Response => {
  console.log(error)
  return {
    statusCode: error.statusCode,
    body: JSON.stringify({
      errorMesssage: error.message,
    }),
  }
}
