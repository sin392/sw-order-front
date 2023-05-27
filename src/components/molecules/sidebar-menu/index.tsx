'use client'
import { usePathname } from 'next/navigation'
import {
  BsFillBagFill,
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileTextFill,
  BsFillQuestionCircleFill,
} from 'react-icons/bs'

import styles from './style.module.css'
import { SideBarMenuItem, ISideBarMenuItemProps } from '@/components/molecules/sidebar-menu-item'

const SIDEBAR_MENUS: ISideBarMenuItemProps[] = [
  { text: '商品', href: '/products', icon: <BsFillBagFill /> },
  { text: '店舗', href: '/affiliates', icon: <BsFillHouseFill /> },
  { text: 'ユーザ', href: '/users', icon: <BsFillPersonFill /> },
  { text: '注文', href: '/orders', icon: <BsFillFileTextFill /> },
  { text: 'ヘルプ', href: '/help', icon: <BsFillQuestionCircleFill /> },
]

interface ISideBarMenuProps {}

export const SideBarMenu: React.FC<ISideBarMenuProps> = () => {
  const pathname = usePathname()
  return (
    <div className={styles.container}>
      {SIDEBAR_MENUS.map((item, index) => (
        <SideBarMenuItem
          key={index}
          icon={item.icon}
          href={item.href}
          text={item.text}
          isSelected={pathname === item.href}
        />
      ))}
    </div>
  )
}
