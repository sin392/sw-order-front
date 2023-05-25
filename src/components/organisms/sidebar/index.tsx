import styles from './style.module.css'
import { Logo } from '@/components/atoms/logo'
import { SideBarMenuItem, ISideBarMenuItemProps } from '@/components/molecules/sidebar-menu-item'

interface ISideBarProps {
  items: ISideBarMenuItemProps[]
}

export const SideBar: React.FC<ISideBarProps> = ({ items }) => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <Logo />
      </div>
      <div className={styles.userContainer}>
        <div className={styles.userImage} />
        <p>ユーザ名</p>
      </div>
      <div className={styles.menuContainer}>
        {items.map((item, index) => (
          <SideBarMenuItem key={index} icon={item.icon} text={item.text} />
        ))}
      </div>
    </div>
  )
}
