import React from 'react'
import { ValidationStub } from '@/presentation/test'
import { render, RenderResult, fireEvent, cleanup } from '@testing-library/react'
import Login from './login'
import faker from 'faker'

type SutTypes = {
  validationSpy: ValidationStub
  sut: RenderResult
}

const makeSut = (): SutTypes => {
  const validationSpy = new ValidationStub()
  validationSpy.errorMessage = faker.random.words()
  const sut = render(<Login validation={validationSpy} />)
  return {
    sut,
    validationSpy
  }
}

describe('Login', () => {
  afterEach(cleanup)

  test('Should start with inital state', () => {
    const { sut, validationSpy } = makeSut()
    const errorWrap = sut.getByTestId('error-wrap')
    expect(errorWrap.childElementCount).toBe(0)

    const submitButton = sut.getByTestId('submit') as HTMLButtonElement
    expect(submitButton.disabled).toBe(true)

    const emailStatus = sut.getByTestId('email-status')
    expect(emailStatus.title).toBe(validationSpy.errorMessage)

    const passwordStatus = sut.getByTestId('password-status')
    expect(passwordStatus.title).toBe(validationSpy.errorMessage)
  })

  test('Should show email error if validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const emailInput = sut.getByTestId('email')
    const emailStatus = sut.getByTestId('email-status')
    fireEvent.input(emailInput, { target: { value: faker.internet.email() } })
    expect(emailStatus.title).toBe(validationSpy.errorMessage)
    expect(emailStatus.classList)
  })

  test('Should show password error if validation fails', () => {
    const { sut, validationSpy } = makeSut()
    const passwordInput = sut.getByTestId('password')
    const passwordStatus = sut.getByTestId('password-status')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    expect(passwordStatus.title).toBe(validationSpy.errorMessage)
    expect(passwordStatus.classList)
  })

  test('Should show valid password if Validation succeeds', () => {
    const { sut, validationSpy } = makeSut()
    validationSpy.errorMessage = null
    const passwordInput = sut.getByTestId('password')
    const passwordStatus = sut.getByTestId('password-status')
    fireEvent.input(passwordInput, { target: { value: faker.internet.password() } })
    expect(passwordStatus.title).toBe('Tudo Certo')
    expect(passwordStatus.classList).toContain('success')
  })
})
