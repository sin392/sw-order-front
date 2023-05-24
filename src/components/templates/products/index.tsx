import React from 'react'
import styles from './style.module.css'

interface IProductPageProps {
  sidebar: React.ReactNode
  header: React.ReactNode
  footer: React.ReactNode
  children: React.ReactNode
}

const ProductPageTemplate: React.FC<IProductPageProps> = (props) => {
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

export default ProductPageTemplate
