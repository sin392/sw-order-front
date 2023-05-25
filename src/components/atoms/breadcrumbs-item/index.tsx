import Link from 'next/link'

export interface IBreadCrumbsItemProps {
  text: string
  href?: string
}

export const BreadCrumbsItem: React.FC<IBreadCrumbsItemProps> = ({ text, href }) => {
  const node = <p>{text}</p>
  return <div>{href ? <Link href={href}>{node}</Link> : node}</div>
}
