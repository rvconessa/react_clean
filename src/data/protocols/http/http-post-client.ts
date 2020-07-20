import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}
/**
 * T: Tipo do Body
 * R: Tipo body response
 */
export interface HttpPostClient<T, R> {
  post: (params: HttpPostParams<T>) => Promise<HttpResponse<R>>
}
