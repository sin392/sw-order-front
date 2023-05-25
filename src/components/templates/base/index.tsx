import styles from './style.module.css'

interface IBasePageProps {
  sidebar: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

export const BasePageTemplate: React.FC<IBasePageProps> = (props) => {
  return (
    <div className={styles.wholeContainer}>
      {props.sidebar}
      <div className={styles.mainContainer}>
        {props.header}
        <div className={styles.contentContainer}>{props.children}</div>
        {props.footer}
      </div>
    </div>
  )
}
