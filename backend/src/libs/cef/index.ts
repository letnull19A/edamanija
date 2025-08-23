import { ZodError } from 'zod/v3/ZodError'

export class CommonErrorFormat {
  protected _errorMessageCollection: Array<string>

  get errorMessageCollection(): Array<string> {
    return this.errorMessageCollection
  }

  constructor(error: Error) {
    this._errorMessageCollection = [ error.message ]
  }
}

export class ZodCEF extends CommonErrorFormat {
  constructor(error: ZodError) {
    super(error)

    this._errorMessageCollection = error.issues.map(error => error.message)
  } 
}
