import { Product } from '@/domain/model/product'
import { IProductRepository } from '@/domain/repository/product'

const ITEM_SOURCE = [
  { name: 'A店 缶バッジ', unitPrice: 300, category: 1, imgSrc: '/badge_sample.webp' },
  { name: 'B店 缶バッジ', unitPrice: 300, category: 1, imgSrc: undefined },
  { name: 'C店 缶バッジ', unitPrice: 300, category: 1, imgSrc: undefined },
  { name: 'D店 缶バッジ', unitPrice: 300, category: 1, imgSrc: undefined },
  { name: 'E店 缶バッジ', unitPrice: 300, category: 1, imgSrc: undefined },
  { name: '2023クリスマス 缶バッジ', unitPrice: 300, category: 1, imgSrc: undefined },
  { name: 'スタンプ帳1', unitPrice: 500, category: 2, imgSrc: undefined },
  { name: 'スタンプ帳2', unitPrice: 500, category: 2, imgSrc: undefined },
  { name: 'スタンプ帳3', unitPrice: 500, category: 2, imgSrc: undefined },
  { name: 'スタンプ帳4', unitPrice: 500, category: 2, imgSrc: undefined },
  { name: 'スタンプ帳5', unitPrice: 500, category: 2, imgSrc: undefined },
  { name: 'その他商品', unitPrice: 1000, category: 0, imgSrc: undefined },
]

// TODO: 非同期化
export class ProductRepository implements IProductRepository {
  findALL(): Product[] {
    return ITEM_SOURCE.map(
      (item) => new Product(item.name, item.unitPrice, item.category, item.imgSrc)
    )
  }

  findByCategory(category: number): Product[] {
    return ITEM_SOURCE.filter((item) => item.category === category).map(
      (item) => new Product(item.name, item.unitPrice, item.category, item.imgSrc)
    )
  }

  findByUnitPrice(unitPrice: number): Product[] {
    return ITEM_SOURCE.filter((item) => item.unitPrice === unitPrice).map(
      (item) => new Product(item.name, item.unitPrice, item.category, item.imgSrc)
    )
  }
}
