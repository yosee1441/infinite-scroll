import { useCallback, useEffect, useRef, useState } from 'react'

import { LoadingSpinner } from '@/components/loading-spinner'
import { Container } from '@/components/container'
import { Spinner } from '@/components/spinner'
import { SkeletonProductLoader } from './components/skeleton-product-loader'
import { ProductCard } from './components/product-card'
import { ProductList } from './components/product-list'
import { useProducts } from './hooks/useProducts'
import { useNearScreen } from '@/hooks/useNearScreen'
import debounce from 'just-debounce-it'

function HomePage() {
  const [showSpinner, setShowSpinner] = useState(false)
  const externalRef = useRef<HTMLDivElement>(null)
  const { loadingInitial, loadingMore, products, error, setPage, meta, page } =
    useProducts()

  const { isNearScreen } = useNearScreen({
    externalRef: loadingMore ? null : externalRef,
    once: false,
  })

  const debounceHandlerNextPage = useCallback(
    debounce(() => setPage((prevPage) => prevPage + 1), 1000),
    [setPage],
  )

  useEffect(() => {
    if (meta?.totalPages && page < meta.totalPages && isNearScreen) {
      setShowSpinner(true)
      debounceHandlerNextPage()
    }
  }, [debounceHandlerNextPage, isNearScreen])

  useEffect(() => {
    !loadingMore && setShowSpinner(false)
  }, [loadingMore])

  return (
    <Container>
      <ProductList
        error={error}
        loadingInitial={loadingInitial}
        onLoadingInitial={() => <SkeletonProductLoader count={10} />}
        loadingMore={loadingMore}
        onLoadingMore={() => <SkeletonProductLoader count={10} />}
        products={products}
        onError={() => <div>Error</div>}
        onEmptyProducts={() => <div>No hay productos disponibles</div>}
        render={(product) => (
          <ProductCard key={product.slug} product={product} />
        )}
      />
      {showSpinner && <LoadingSpinner size={'md'} spinnerSize="sm" />}
      <div id="visor" ref={externalRef} className="w-full" />
    </Container>
  )
}

export default HomePage
