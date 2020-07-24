import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  constructor (private readonly validators: FieldValidation[]) {}
  validate (fieldName: string, fieldValue: string): string {
    const listValidators = this.validators.filter(v => v.field === fieldName)
    for (const validator of listValidators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
    return null
  }
}
