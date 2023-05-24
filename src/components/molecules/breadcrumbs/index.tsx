import styles from './style.module.css'

export interface IBreadCrumbsProps {
  items: string[]
}

export const BreadCrumbs: React.FC<IBreadCrumbsProps> = ({ items }) => {
  return (
    <div className={styles.container}>
      {items.map((item, index) => (
        <div key={index} className={styles.item}>
          {item}
        </div>
      ))}
    </div>
  )
}
