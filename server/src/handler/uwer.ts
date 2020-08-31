import { entityTypeHandlers } from '../entity/entityTypes'
import { Exception500 } from '../utils/exceptions'
import {
  Response,
  handleResponse,
  handleErrorResponse,
} from '../utils/response'

interface Event {
  httpMethod: string
  queryStringParameters: { [key: string]: string }
  body: string
}

export const handler = async (event: Event): Promise<Response> => {
  try {
    switch (event.httpMethod) {
      case 'GET':
        return get(event)
      case 'POST':
        return post(event)
      default:
        throw new Exception500('Http method not implemented')
    }
  } catch (e) {
    console.log(e.statusCode)
    return handleErrorResponse(e)
  }
}

const get = (event: Event) => {
  try {
    const entityTypeHandler =
      entityTypeHandlers[event.queryStringParameters.entityType]
    return handleResponse(entityTypeHandler.get(event.queryStringParameters))
  } catch (e) {
    throw new Exception500(`Error on get method: ${e.message}`)
  }
}

const post = (event: Event) => {
  try {
    const entityTypeHandler =
      entityTypeHandlers[event.queryStringParameters.entityType]
    return handleResponse(entityTypeHandler.post(JSON.parse(event.body)))
  } catch (e) {
    throw new Exception500(`Error on post method: ${e.message}`)
  }
}
