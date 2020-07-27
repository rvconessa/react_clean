import { Authentication } from '@/domain/usecases/authentication'
import { RemoteAuthentication } from '@/data/usecases/authentication/remote-authentication'
import { makeAxiosHttpAdapterClient } from '../../http/axios-http-client-factory'
import { makeApiUrl } from '../../http/api-url-factory'

export const makeRemoteAuthentication = (): Authentication => {
  return new RemoteAuthentication(makeApiUrl('/login'), makeAxiosHttpAdapterClient())
}
