import styles from './style.module.css'

export interface ISideBarMenuItemProps {
  icon?: string | React.ReactNode
  text: string
}

export const SideBarMenuItem: React.FC<ISideBarMenuItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      {icon && <div className={styles.iconContainer}>{icon}</div>}
      <div>{text}</div>
    </div>
  )
}
