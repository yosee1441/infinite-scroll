import { lazy, Suspense } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { LoadingSpinner } from '@/components/loading-spinner'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const HomePage = lazy(() => import('@pages/home/Home.page'))
const ProductsPage = lazy(() => import('@pages/products/Products.page'))
const NotFoundPage = lazy(() => import('@pages/not-found/NotFound.page'))

export const AppRouter = () => {
  return (
    <Suspense fallback={<LoadingSpinner variant={'primary'} />}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Suspense>
  )
}
