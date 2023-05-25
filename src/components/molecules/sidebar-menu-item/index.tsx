import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from './style.module.css'

export interface ISideBarMenuItemProps {
  text: string
  href?: Url
  icon?: string | React.ReactNode
  isSelected?: boolean
}

export const SideBarMenuItem: React.FC<ISideBarMenuItemProps> = ({
  text,
  href,
  icon,
  isSelected,
}) => {
  const containerClassName = isSelected
    ? `${styles.container} ${styles.selected}`
    : styles.container
  const node = (
    <div className={containerClassName}>
      <div className={styles.internalContainer}>
        {icon && <div className={styles.iconContainer}>{icon}</div>}
        <p>{text}</p>
      </div>
    </div>
  )
  return href ? <Link href={href}>{node}</Link> : node
}
