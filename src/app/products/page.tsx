import { NextPage } from 'next'

import { ProductPage } from '@/components/pages/products'

interface IProductPageProps {}

const ActualProductPage: NextPage<IProductPageProps> = (props) => {
  return <ProductPage />
}

export default ActualProductPage
