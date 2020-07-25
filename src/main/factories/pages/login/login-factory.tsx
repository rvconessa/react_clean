import React from 'react'
import { Login } from '@/presentation/pages'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { AxiosHttpAdapterClient } from '@/infra/http/axiosHttpClient/axios-http-client'
import { ValidationBuilder } from '@/validation/validators/build/validation-builder'
import { ValidationComposite } from '@/validation/validators'

export const makeLogin: React.FC = () => {
  const url = 'http://fordevs.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpAdapterClient()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])
  return (
    <Login
      authentication={remoteAuthentication}
      validation={validationComposite}
    />
  )
}
