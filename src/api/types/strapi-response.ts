export interface StrapiData<T> {
  id: number
  attributes: T
}

export interface StrapiResponse<T, D = false> {
  data: D extends true ? StrapiData<T>[] : StrapiData<T>
  meta: unknown
}
