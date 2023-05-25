import styles from './style.module.css'

import { BreadCrumbsItem, IBreadCrumbsItemProps } from '@/components/atoms/breadcrumbs-item'

export interface IBreadCrumbsProps {
  items: IBreadCrumbsItemProps[]
}

export const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          <BreadCrumbsItem text={item.text} href={item.href} />
        </div>
      ))}
    </div>
  )
}
