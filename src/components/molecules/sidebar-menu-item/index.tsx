import React from 'react'
import styles from './style.module.css'

export interface ISideBarMenuItemProps {
  icon?: string | React.ReactNode
  text: string
}

const SideBarMenuItem: React.FC<ISideBarMenuItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.container}>
      {icon && <div>{icon}</div>}
      <div>{text}</div>
    </div>
  )
}

export default SideBarMenuItem
