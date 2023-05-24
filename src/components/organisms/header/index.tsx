import { BreadCrumbs } from '@/components/molecules/breadcrumbs'
import styles from './style.module.css'

interface IHeader {}

export const Header: React.FC<IHeader> = (props) => {
  return (
    <div>
      <header className={styles.header}>
        <div>テストサイト</div>
      </header>
      <BreadCrumbs items={['Page1', 'Page2', 'Page3']} />
    </div>
  )
}
