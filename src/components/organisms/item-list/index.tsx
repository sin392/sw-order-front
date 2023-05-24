import React from 'react'
import styles from './style.module.css'
import ItemListItem, { IItemListItemProps } from '@/components/molecules/item-list-item'

interface IItemListProps {
  label?: string
  items: IItemListItemProps[]
}

const ItemList: React.FC<IItemListProps> = ({ label, items }) => {
  return (
    <div>
      {label && <div className={styles.label}>{label}</div>}
      <div className={styles.container}>
        {items.map((item, index) => (
          <ItemListItem key={index} imgSrc={item.imgSrc} name={item.name} />
        ))}
      </div>
    </div>
  )
}

export default ItemList
