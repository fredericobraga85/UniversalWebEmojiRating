export abstract class Exception extends Error {
  statusCode: number
  message: string
}

export class Exception422 extends Exception {
  readonly statusCode = 422
}

export class Exception500 extends Exception {
  readonly statusCode = 500
}
