import { createAsyncThunk } from '@reduxjs/toolkit'

import { PaginationDto } from '@/dtos/pagination.dto'
import { ProductHttpService } from '@pages/home/services'

export const findAllProducts = createAsyncThunk(
  'products/findAllProducts',
  async (dto: PaginationDto) => {
    const service = new ProductHttpService()
    const response = await service.findAll(dto)
    return response
  },
)
