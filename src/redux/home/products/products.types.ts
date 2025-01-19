import { Pagination } from '@/models'
import { Product } from '@pages/home/models'

export interface ProductsState {
  pagination: Pagination<Product[]> | null
  loadingInitial: boolean
  loadingMore: boolean
  error: string | null
}

