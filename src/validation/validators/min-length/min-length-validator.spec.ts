import { MinLengthValidation } from './min-length-validator'
import { InvalidFieldError } from '@/validation/errors'

describe('MinLengthValidator', () => {
  test('Should return if value is invalid', () => {
    const sut = new MinLengthValidation('field', 5)
    const error = sut.validate('123')
    expect(error).toEqual(new InvalidFieldError())
  })
})
