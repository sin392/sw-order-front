export class Product {
  name: string
  unitPrice: number
  category: number
  imgSrc?: string

  constructor(name: string, unitPrice: number, category: number, imgSrc?: string) {
    this.name = name
    this.unitPrice = unitPrice
    this.category = category
    this.imgSrc = imgSrc
  }
}
