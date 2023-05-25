'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

import styles from './style.module.css'
import { BreadCrumbs, IBreadCrumbsItemListType } from '@/components/molecules/breadcrumbs'

interface IHeader {}

export const Header: React.FC<IHeader> = () => {
  const pathname = usePathname()
  const [items, setItems] = useState<IBreadCrumbsItemListType>([])
  useEffect(() => {
    const paths = pathname.split('/').filter((item) => item)
    let items: IBreadCrumbsItemListType = [{ text: 'home', href: '/' }]
    paths.forEach((path, index) => {
      items.push({ text: path, href: `/${paths.slice(0, index + 1).join('/')}` })
    })
    setItems(items)
  }, [pathname])
  return (
    <div>
      <header className={styles.header}>
        <div>テストサイト</div>
      </header>
      <BreadCrumbs items={items} />
    </div>
  )
}
