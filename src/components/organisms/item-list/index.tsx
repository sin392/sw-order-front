import Link from 'next/link'
import styles from './style.module.css'
import { ItemListItem, IItemListItemProps } from '@/components/molecules/item-list-item'
import { Url } from 'next/dist/shared/lib/router/router'

interface IItemListProps {
  items: IItemListItemProps[]
  label?: string
  href?: Url
}

const LINK_TEXT = '> 全てを見る'

export const ItemList: React.FC<IItemListProps> = ({ items, label, href }) => {
  return (
    <div>
      <div className={styles.headerContainer}>
        <p className={styles.label}>{label}</p>
        {href ? (
          <Link href={href}>{LINK_TEXT}</Link>
        ) : (
          <a href='#' className={styles.disabledLink}>
            {LINK_TEXT}
          </a>
        )}
      </div>
      <div className={styles.container}>
        {items.map((item, index) => (
          <ItemListItem key={index} imgSrc={item.imgSrc} name={item.name} />
        ))}
      </div>
    </div>
  )
}
