import { Product } from '@pages/home/models'
import { ProductGrid } from '@pages/home/components/product-grid'

interface ProductListProps {
  loadingInitial: boolean
  onLoadingInitial: () => React.ReactNode
  loadingMore: boolean
  onLoadingMore: () => React.ReactNode
  error: string | null
  onError: () => React.ReactNode
  products: Product[] | null
  onEmptyProducts: () => React.ReactNode
  children?: React.ReactNode
  render?: (product: Product) => React.ReactNode
}

const ProductList: React.FC<ProductListProps> = ({
  loadingInitial,
  onLoadingInitial,
  loadingMore,
  onLoadingMore,
  error,
  onError,
  products,
  onEmptyProducts,
  children,
  render,
}) => {
  const renderFunc = (children || render) as (
    product: Product,
  ) => React.ReactNode

  return (
    <>
      {loadingInitial && <ProductGrid>{onLoadingInitial()}</ProductGrid>}
      {error && onError()}
      {!loadingInitial && products?.length === 0 && onEmptyProducts()}
      {!loadingInitial && !error && (
        <ProductGrid>
          {products?.map(renderFunc)}
          {loadingMore && onLoadingMore()}
        </ProductGrid>
      )}
    </>
  )
}

export default ProductList
