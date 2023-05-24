import React from 'react'
import styles from './style.module.css'
import SideBarMenuItem, { ISideBarMenuItemProps } from '@/components/molecules/sidebar-menu-item'

interface ISideBarProps {
  items: ISideBarMenuItemProps[]
}

const SideBar: React.FC<ISideBarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <h1 className={styles.logoContainer}>SWORD</h1>
      <div className={styles.userContainer}>
        <div className={styles.userImage} />
        <div>ユーザ名</div>
      </div>
      <div className={styles.menuContainer}>
        {items.map((item, index) => (
          <SideBarMenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  )
}

export default SideBar
