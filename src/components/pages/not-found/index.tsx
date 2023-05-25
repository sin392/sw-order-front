import styles from './style.module.css'
import { BasePageTemplate } from '@/components/templates/base'
import { SideBar } from '@/components/organisms/sidebar'
import { Header } from '@/components/organisms/header'
import { Footer } from '@/components/organisms/footer'

interface INotFoundPageProps {}

export const NotFoundPage: React.FC<INotFoundPageProps> = () => {
  return (
    <BasePageTemplate sidebar={<SideBar />} header={<Header />} footer={<Footer />}>
      <div className={styles.container}>
        <p>404: ページが存在しません</p>
      </div>
    </BasePageTemplate>
  )
}
