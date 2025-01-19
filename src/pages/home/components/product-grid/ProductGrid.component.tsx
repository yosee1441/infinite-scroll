interface ProductGridProps {
  children: React.ReactNode
}

const ProductGrid: React.FC<ProductGridProps> = ({ children }) => {
  return (
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {children}
    </section>
  )
}

export default ProductGrid

