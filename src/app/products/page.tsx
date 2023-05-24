import { NextPage } from 'next'
import React from 'react'

import ProductPage from '@/components/pages/products'

interface IProductPageProps {}

const ActualProductPage: NextPage<IProductPageProps> = (props) => {
  return <ProductPage />
}

export default ActualProductPage
