import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import {
  connectApiMocker,
  HttpMethods,
  HttpStatus,
  HttpContentType,
} from 'vite-connect-api-mocker'
import fs from 'fs/promises'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    connectApiMocker({
      mocks: [
        {
          url: '/api/product',
          method: HttpMethods.GET,
          timeout: 2000,
          statusCode: HttpStatus.OK,
          contentType: HttpContentType.JSON,
          response: async (req, res) => {
            const queryParams = new URLSearchParams(req.url.split('?')[1])
            const queryParamPage = queryParams.get('page') || '1'
            const queryParamLimit = queryParams.get('limit') || '10'
            const page = parseInt(queryParamPage)
            const limit = parseInt(queryParamLimit)

            const response = await fs.readFile(
              './mocks/api/product/GET.json',
              'utf-8',
            )
            const products = JSON.parse(response)

            const startIndex = (page - 1) * limit
            const endIndex = startIndex + limit
            const paginatedProducts = products.slice(startIndex, endIndex)

            const responsePayload = {
              results: paginatedProducts,
              meta: {
                total: products.length,
                page,
                limit,
                totalPages: Math.ceil(products.length / limit),
              },
            }

            res.end(JSON.stringify(responsePayload))
          },
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '@pages': path.resolve(__dirname, './src/pages/'),
      '@redux': path.resolve(__dirname, './src/redux/'),
      '@routers': path.resolve(__dirname, './src/routers/'),
    },
  },
})
