import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ProductCarousel = () => {
    return (
      <section className='bg-primary-3'>
        <div className='product-carousel relative container flex flex-row mx-auto overflow-x-auto'>
          <div className='flex mx-auto py-2'>
            <div className='w-auto flex flex-row gap-4 items-center px-4 py-3'>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg'>
                    <Image
                      src="/assets/img/products/headphones.png"
                      width={50}
                      height={80}
                      alt="Headphones"
                    />
                  </div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Beats by Dre C 3450. Active Noise Cancelling</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '80%'}}></span>
                </span>
              </div>

              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg'>
                    <Image
                      src="/assets/img/products/apple-watch-2.png"
                      width={50}
                      height={80}
                      alt='Headphones'
                    />
                  </div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Apple Watch 4 2020. Silver - Special Edition</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '0%'}}></span>
                </span>
              </div>

              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg'>
                    <Image
                      src="/assets/img/products/samsung-watch-2.png"
                      width={50}
                      height={80}
                      alt='Headphones'
                    />
                  </div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Samsung Galaxy Watch 3. Black Metalic Newest</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '0%'}}></span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}

export default ProductCarousel
