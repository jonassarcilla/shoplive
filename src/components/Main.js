import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import Hero from './Hero'
import ProductCarousel from './ProductCarousel'
import ProductRecommendation from './ProductRecommendation'
import HotItem from './HotItem'
import Categories from './Categories'
import Stats from './Stats'
import Blog from './Blog'
import Promotions from './Promotions'

const Main = () => {
    return (
        <main className=''>
          <Hero/>
          <ProductCarousel/>
          <ProductRecommendation/>

          <HotItem/>
          <Categories/>

          <Stats/>
          <Blog/>
          <Promotions/>
        </main>
    )
}

export default Main
