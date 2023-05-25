import Link from 'next/link'

import styles from './style.module.css'
import { Logo } from '@/components/atoms/logo'
import { SideBarMenu } from '@/components/molecules/sidebar-menu'

interface ISideBarProps {}

export const SideBar: React.FC<ISideBarProps> = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Link href='/'>
          <Logo />
        </Link>
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userImage} />
        <p>ユーザ名</p>
      </div>
      <SideBarMenu />
    </div>
  )
}
