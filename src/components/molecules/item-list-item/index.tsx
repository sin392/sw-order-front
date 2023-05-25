import styles from './style.module.css'

import { FillImage } from '@/components/atoms/image'

export interface IItemListItemProps {
  name: string
  imgSrc?: string
}

export const ItemListItem: React.FC<IItemListItemProps> = ({ name, imgSrc }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        {imgSrc ? <FillImage src={imgSrc} alt={name} /> : <div>NO IMAGE</div>}
      </div>
      <div className={styles.name}>{name}</div>
    </div>
  )
}
