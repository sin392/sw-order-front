import Image from 'next/image'
import styles from './style.module.css'

export interface IItemListItemProps {
  name: string
  imgSrc?: string
}

export const ItemListItem: React.FC<IItemListItemProps> = ({ name, imgSrc }) => {
  return (
    <div className={styles.container}>
      {
        <div className={styles.imgContainer}>
          {imgSrc ? <Image src={imgSrc} alt={name} /> : <div>NO IMAGE</div>}
        </div>
      }
      <div className={styles.name}>{name}</div>
    </div>
  )
}
