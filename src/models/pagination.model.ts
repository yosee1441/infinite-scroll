export interface Pagination<T> {
  meta: {
    total: number
    limit: number
    page: number
    totalPages: number
  }
  results: T
}
