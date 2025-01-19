import { Http } from '@/services'
import { Pagination } from '@/models'
import { Product } from '@pages/home/models'
import { PaginationDto } from '@/dtos/pagination.dto'

export class ProductHttpService {
  private http: Http

  constructor() {
    this.http = new Http()
  }

  async findAll(dto: PaginationDto): Promise<Pagination<Product[]>> {
    const { page, limit } = dto
    const response = await this.http.get<Pagination<Product[]>>(`product/?page=${page}&limit=${limit}`)
    return response
  }
}
