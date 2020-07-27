import { AxiosHttpAdapterClient } from '@/infra/http/axiosHttpClient/axios-http-client'

export const makeAxiosHttpAdapterClient = (): AxiosHttpAdapterClient => {
  return new AxiosHttpAdapterClient()
}
