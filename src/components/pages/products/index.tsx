import styles from './style.module.css'
import { ProductPageTemplate } from '@/components/templates/products'
import { SideBar } from '@/components/organisms/sidebar'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { ItemList } from '@/components/organisms/item-list'
import { ProductRepository } from '@/infra/repository/product'

interface IProductPageProps {}

export const ProductPage: React.FC<IProductPageProps> = () => {
  const productRepo = new ProductRepository()
  const badges = productRepo.findByCategory(1)
  const stampBooks = productRepo.findByCategory(2)
  const others = productRepo.findByCategory(0)
  return (
    <ProductPageTemplate sidebar={<SideBar />} header={<Header />} footer={<Footer />}>
      <div className={styles.listContainer}>
        <ItemList label='缶バッジ' items={badges} />
        <ItemList label='スタンプ帳' items={stampBooks} />
        <ItemList label='その他' items={others} />
      </div>
    </ProductPageTemplate>
  )
}
