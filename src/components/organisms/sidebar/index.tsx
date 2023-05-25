import Link from 'next/link'
import {
  BsFillBagFill,
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileTextFill,
  BsFillQuestionCircleFill,
} from 'react-icons/bs'

import styles from './style.module.css'
import { Logo } from '@/components/atoms/logo'
import { SideBarMenuItem, ISideBarMenuItemProps } from '@/components/molecules/sidebar-menu-item'

interface ISideBarProps {}

const SIDEBAR_MENUS: ISideBarMenuItemProps[] = [
  { text: '商品', href: '/products', icon: <BsFillBagFill /> },
  { text: '店舗', href: '/', icon: <BsFillHouseFill /> },
  { text: 'ユーザ', href: '/', icon: <BsFillPersonFill /> },
  { text: '注文', href: '/', icon: <BsFillFileTextFill /> },
  { text: 'ヘルプ', href: '/', icon: <BsFillQuestionCircleFill /> },
]

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
      <div className={styles.menuContainer}>
        {SIDEBAR_MENUS.map((item, index) => (
          <SideBarMenuItem key={index} icon={item.icon} href={item.href} text={item.text} />
        ))}
      </div>
    </div>
  )
}
