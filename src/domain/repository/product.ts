import { Product } from '@/domain/model/product'

export interface IProductRepository {
  findALL(): Product[]
  findByCategory(category: number): Product[]
  findByUnitPrice(unitPrice: number): Product[]
}
