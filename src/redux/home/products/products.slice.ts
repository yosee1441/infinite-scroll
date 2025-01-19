import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { Pagination } from '@/models'
import { Product } from '@pages/home/models'
import { findAllProducts } from './products.actions'
import { ProductsState } from './products.types'
import { INITIAL_PAGE } from '@pages/home/utils/constants'

const ProductsEmptyState: ProductsState = {
  pagination: {
    meta: {
      total: 0,
      limit: 0,
      page: 0,
      totalPages: 0,
    },
    results: [],
  },
  loadingInitial: false,
  loadingMore: false,
  error: null,
}

const productsSlice = createSlice({
  name: 'home/products',
  initialState: ProductsEmptyState,
  reducers: {
    resetProducts: () => ProductsEmptyState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(findAllProducts.pending, (state, action) => {
        const { page } = action.meta.arg
        if (page === INITIAL_PAGE) {
          state.loadingInitial = true
        } else {
          state.loadingMore = true
        }
        state.error = null
      })
      .addCase(
        findAllProducts.fulfilled,
        (state, action: PayloadAction<Pagination<Product[]>>) => {
          state.loadingInitial = false
          state.loadingMore = false
          state.pagination = {
            meta: action.payload.meta,
            results: [...state.pagination!.results, ...action.payload.results],
          }
        },
      )
      .addCase(findAllProducts.rejected, (state, action) => {
        state.loadingInitial = false
        state.loadingMore = false
        state.error = action.payload as string
      })
  },
})

export const { resetProducts } = productsSlice.actions
export default productsSlice.reducer
