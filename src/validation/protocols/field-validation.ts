export interface FielValidation {
  field: string
  validate: (value: string) => Error
}
