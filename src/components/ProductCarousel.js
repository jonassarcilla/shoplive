import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const ProductCarousel = () => {
    return (
      <section className='bg-primary-3'>
        <div className=''>
          <section className='container mx-auto flex flex-col flex-wrap gap-x-2 items-center py-5'>
            <div className='relative flex-auto flex flex-col flex-wrap items-center justify-items-center content-center py-8'>
            <div className='absolute top-10 -left-5 z-20'>
              <svg xmlns="http://www.w3.org/2000/svg" width="34.198" height="34.198" viewBox="0 0 34.198 34.198">
              <circle id="Shape" cx="17.099" cy="17.099" r="17.099" fill="#1565d8"/>
              </svg>
            </div>

            <div className='bg-red-100 h-80 w-60 flex-auto flex flex-col flex-wrap items-center justify-items-center content-center z-10'>
              Image Carousel
            </div>
            <div className='absolute bottom-16 -left-5 z-20'>
              <svg xmlns="http://www.w3.org/2000/svg" width="86.921" height="101.171" viewBox="0 0 86.921 101.171">
              <path id="Pattern" d="M81.808,98.6a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,81.808,98.6Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,68.173,98.6Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,54.539,98.6ZM40.9,98.6a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,40.9,98.6Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,27.269,98.6Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,13.635,98.6ZM0,98.6a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,0,98.6ZM81.808,84.88a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,81.808,84.88Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,68.173,84.88Zm-13.634,0A2.556,2.556,0,1,1,57.1,87.452,2.563,2.563,0,0,1,54.539,84.88Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,40.9,84.88Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,27.269,84.88Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.563,2.563,0,0,1,13.635,84.88ZM0,84.88a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,0,84.88ZM81.808,71.162a2.556,2.556,0,1,1,2.556,2.572A2.565,2.565,0,0,1,81.808,71.162Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,68.173,71.162Zm-13.634,0A2.556,2.556,0,1,1,57.1,73.734,2.564,2.564,0,0,1,54.539,71.162Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,40.9,71.162Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,27.269,71.162Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,13.635,71.162ZM0,71.162a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,0,71.162ZM81.808,57.444a2.556,2.556,0,1,1,2.556,2.572A2.565,2.565,0,0,1,81.808,57.444Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,68.173,57.444Zm-13.634,0A2.556,2.556,0,1,1,57.1,60.017,2.564,2.564,0,0,1,54.539,57.444Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,40.9,57.444Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,27.269,57.444Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,13.635,57.444ZM0,57.444a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,0,57.444ZM81.808,43.727A2.556,2.556,0,1,1,84.364,46.3,2.564,2.564,0,0,1,81.808,43.727Zm-13.635,0A2.556,2.556,0,1,1,70.73,46.3,2.564,2.564,0,0,1,68.173,43.727Zm-13.634,0A2.556,2.556,0,1,1,57.1,46.3,2.564,2.564,0,0,1,54.539,43.727Zm-13.635,0A2.556,2.556,0,1,1,43.461,46.3,2.564,2.564,0,0,1,40.9,43.727Zm-13.635,0A2.556,2.556,0,1,1,29.826,46.3,2.564,2.564,0,0,1,27.269,43.727Zm-13.634,0A2.556,2.556,0,1,1,16.191,46.3,2.564,2.564,0,0,1,13.635,43.727ZM0,43.727A2.556,2.556,0,1,1,2.557,46.3,2.564,2.564,0,0,1,0,43.727ZM81.808,30.008a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,81.808,30.008Zm-13.635,0A2.556,2.556,0,1,1,70.73,32.58,2.564,2.564,0,0,1,68.173,30.008Zm-13.634,0A2.556,2.556,0,1,1,57.1,32.58,2.563,2.563,0,0,1,54.539,30.008Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,40.9,30.008Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.564,2.564,0,0,1,27.269,30.008Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.563,2.563,0,0,1,13.635,30.008ZM0,30.008A2.556,2.556,0,1,1,2.557,32.58,2.564,2.564,0,0,1,0,30.008ZM81.808,16.29a2.556,2.556,0,1,1,2.556,2.572A2.565,2.565,0,0,1,81.808,16.29Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,68.173,16.29Zm-13.634,0A2.556,2.556,0,1,1,57.1,18.862,2.564,2.564,0,0,1,54.539,16.29Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,40.9,16.29Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,27.269,16.29Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,13.635,16.29ZM0,16.29a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,0,16.29ZM81.808,2.572a2.556,2.556,0,1,1,2.556,2.572A2.565,2.565,0,0,1,81.808,2.572Zm-13.635,0A2.556,2.556,0,1,1,70.73,5.144,2.565,2.565,0,0,1,68.173,2.572Zm-13.634,0A2.556,2.556,0,1,1,57.1,5.144,2.564,2.564,0,0,1,54.539,2.572Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,40.9,2.572Zm-13.635,0a2.556,2.556,0,1,1,2.557,2.572A2.565,2.565,0,0,1,27.269,2.572Zm-13.634,0a2.556,2.556,0,1,1,2.556,2.572A2.564,2.564,0,0,1,13.635,2.572ZM0,2.572A2.556,2.556,0,1,1,2.557,5.144,2.565,2.565,0,0,1,0,2.572Z" fill="#5a7184" opacity="0.1"/>
              </svg>
            </div>
            <div className='absolute bottom-8 -right-5'>
              <svg xmlns="http://www.w3.org/2000/svg" width="106.87" height="106.87" viewBox="0 0 106.87 106.87">
              <rect id="Shape" width="106.87" height="106.87" fill="#faad13"/>
              </svg>
            </div>
            </div>
          </section>
        </div>
        <div className='product-carousel relative container flex flex-row mx-auto overflow-x-auto'>
          <div className='flex-auto py-2'>
            <div className='w-auto flex flex-row gap-4 items-start px-4 py-3'>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg bg-red-400'></div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Samsung Galaxy Watch 3. Black Metalic Newest</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '80%'}}></span>
                </span>
              </div>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg bg-red-400'></div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Samsung Galaxy Watch 3. Black Metalic Newest</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '0%'}}></span>
                </span>
              </div>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg bg-red-400'></div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Samsung Galaxy Watch 3. Black Metalic Newest</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '0%'}}></span>
                </span>
              </div>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg bg-red-400'></div>
                  <div className='flex flex-col flex-auto mx-4'>
                    <p className='text-sm text-primary-text font-semibold'>Samsung Galaxy Watch 3. Black Metalic Newest</p>
                    <span className='text-sm text-primary-text mt-4 font-semibold'>$1,750.00</span>
                  </div>
                </div>
                <span className='h-1 my-1 bg-white rounded-2xl flex flex-col'>
                  <span className='flex-auto bg-primary-2 rounded-2xl' style={{ width: '0%'}}></span>
                </span>
              </div>
              <div className='w-72 flex flex-col'>
                <div className='flex flex-row bg-white rounded-lg px-4 py-4'>
                  <div className='w-20 h-20 rounded-lg bg-red-400'></div>
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