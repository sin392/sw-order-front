import styles from './style.module.css'

interface IFooter {}

export const Footer: React.FC<IFooter> = (props) => {
  return (
    <footer className={styles.footer}>
      <div>footer</div>
    </footer>
  )
}
