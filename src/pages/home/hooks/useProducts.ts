import { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '@redux/hooks'
import { findAllProducts } from '@redux/home/products/products.actions'
import { INITIAL_PAGE } from '@pages/home/utils'

export const useProducts = () => {
  const [page, setPage] = useState<number>(INITIAL_PAGE)
  const { loadingInitial, loadingMore, pagination, error } = useAppSelector(
    (state) => state.home.products,
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(findAllProducts({ page: 1, limit: 10 }))
  }, [])

  useEffect(() => {
    if (page === INITIAL_PAGE) return

    dispatch(findAllProducts({ page, limit: 10 }))
  }, [page, setPage])

  return {
    loadingInitial,
    loadingMore,
    products: pagination?.results || [],
    error,
    meta: pagination?.meta,
    setPage,
    page,
  }
}
