import Link from 'next/link'
import { Url } from 'next/dist/shared/lib/router/router'
import styles from './style.module.css'

export interface ISideBarMenuItemProps {
  text: string
  href?: Url
  icon?: string | React.ReactNode
}

export const SideBarMenuItem: React.FC<ISideBarMenuItemProps> = ({ text, href, icon }) => {
  const node = (
    <div className={styles.container}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <p>{text}</p>
    </div>
  )
  return href ? <Link href={href}>{node}</Link> : node
}
