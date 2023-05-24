import styles from './style.module.css'
import { ProductPageTemplate } from '@/components/templates/products'
import { SideBar } from '@/components/organisms/sidebar'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'
import { ItemList } from '@/components/organisms/item-list'
import { ProductRepository } from '@/infra/repository/product'

interface IProductPageProps {}

const SIDEBAR_MENUS = [
  { text: '商品' },
  { text: '店舗' },
  { text: 'ユーザ' },
  { text: '注文' },
  { text: 'ヘルプ' },
]

const ITEM_LIST = [
  { name: 'Item1' },
  { name: 'Item2' },
  { name: 'Item3' },
  { name: 'Item4' },
  { name: 'Item5' },
]

export const ProductPage: React.FC<IProductPageProps> = (props) => {
  const productRepo = new ProductRepository()
  const badges = productRepo.findByCategory(1)
  const stampBooks = productRepo.findByCategory(2)
  const others = productRepo.findByCategory(0)
  return (
    <ProductPageTemplate
      sidebar={<SideBar items={SIDEBAR_MENUS} />}
      header={<Header />}
      footer={<Footer />}
    >
      <div className={styles.listContainer}>
        <ItemList label='缶バッジ' items={badges} />
        <ItemList label='スタンプ帳' items={stampBooks} />
        <ItemList label='その他' items={others} />
      </div>
    </ProductPageTemplate>
  )
}
