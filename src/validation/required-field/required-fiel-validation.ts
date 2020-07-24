import { RequiredFieldError } from '@/validation/errors'
import { FielValidation } from '../protocols/field-validation'

export class RequiredFieldValidation implements FielValidation {
  constructor (readonly field: string) {}

  validate (value: string): Error {
    return value ? null : new RequiredFieldError()
  }
}
