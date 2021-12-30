import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Blog = () => {
    return (
      <section className='bg-white'>
        <div className='flex flex-col container mx-auto px-5 pb-9'>
          <div className='flex flex-col text-center pt-24 border-t-2'>
            <h3 className='text-center text-3xl'>📝<span>Read Our Blog</span></h3>
            <p className='mt-6 mb-9 text-base text-secondary-text'>Check our latest article to get an inspiring content for shopping</p>
          </div>

          <div className='flex flex-col gap-4'>
            <article className='relative flex flex-col px-4 py-4 bg-accent-3 rounded-lg'>
              <div className='relative flex flex-row items-center justify-items-center content-center justify-center h-20vh rounded-lg bg-special'>
                <div className='absolute top-4 right-4 w-9 h-9 rounded-full bg-white z-0'>
                    <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="13.365" viewBox="0 0 10.4 13.365">
                        <path id="Path" d="M2.8,0H7.6a2.8,2.8,0,0,1,2.8,2.8v9.365a1.2,1.2,0,0,1-1.969.921L5.456,10.6a.4.4,0,0,0-.512,0L1.969,13.086A1.2,1.2,0,0,1,0,12.165V2.8A2.8,2.8,0,0,1,2.8,0Z" fill="#5a7184"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div>
                <h4 className='pt-5 pb-2 text-lg text-primary-text'>Brighten Up Dull Tired Skin</h4>
                <p className='mb-4 text-sm'>Gravity is an irresistible force. While it is certainly nice that…</p>
                <span className='flex flex-row items-center justify-items-center content-center justify-start gap-4'>
                  <span className='text-base text-secondary font-semibold'>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.251" height="11.941" viewBox="0 0 12.251 11.941">
                      <path id="arrow-right" d="M6.743,11.748l5.316-5.316a.654.654,0,0,0,0-.927L6.743.193a.654.654,0,0,0-.927,0L5.209.8a.652.652,0,0,0,.011.938L8.515,4.877H.656A.655.655,0,0,0,0,5.533v.875a.655.655,0,0,0,.656.656H8.515L5.22,10.2a.657.657,0,0,0-.011.938l.607.607A.654.654,0,0,0,6.743,11.748Z" fill="#36b37e"/>
                    </svg>
                  </span>
                </span>
              </div>
            </article>

            <article className='flex flex-col px-4 py-4 bg-accent-3 rounded-lg'>
              <div className='relative flex flex-row items-center justify-items-center content-center justify-center h-32 h-20vh rounded-lg bg-special'>
                <div className='absolute top-4 right-4 w-9 h-9 rounded-full bg-white z-0'>
                    <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="13.365" viewBox="0 0 10.4 13.365">
                        <path id="Path" d="M2.8,0H7.6a2.8,2.8,0,0,1,2.8,2.8v9.365a1.2,1.2,0,0,1-1.969.921L5.456,10.6a.4.4,0,0,0-.512,0L1.969,13.086A1.2,1.2,0,0,1,0,12.165V2.8A2.8,2.8,0,0,1,2.8,0Z" fill="#5a7184"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div>
                <h4 className='pt-5 pb-2 text-lg text-primary-text'>Brighten Up Dull Tired Skin</h4>
                <p className='mb-4 text-sm'>Gravity is an irresistible force. While it is certainly nice that…</p>
                <span className='flex flex-row items-center justify-items-center content-center justify-start gap-4'>
                  <span className='text-base text-secondary font-semibold'>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.251" height="11.941" viewBox="0 0 12.251 11.941">
                      <path id="arrow-right" d="M6.743,11.748l5.316-5.316a.654.654,0,0,0,0-.927L6.743.193a.654.654,0,0,0-.927,0L5.209.8a.652.652,0,0,0,.011.938L8.515,4.877H.656A.655.655,0,0,0,0,5.533v.875a.655.655,0,0,0,.656.656H8.515L5.22,10.2a.657.657,0,0,0-.011.938l.607.607A.654.654,0,0,0,6.743,11.748Z" fill="#36b37e"/>
                    </svg>
                  </span>
                </span>
              </div>
            </article>

            <article className='flex flex-col px-4 py-4 bg-accent-3 rounded-lg'>
              <div className='relative flex flex-row items-center justify-items-center content-center justify-center h-32 h-20vh rounded-lg bg-special'>
                <div className='absolute top-4 right-4 w-9 h-9 rounded-full bg-white z-0'>
                    <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" width="10.4" height="13.365" viewBox="0 0 10.4 13.365">
                        <path id="Path" d="M2.8,0H7.6a2.8,2.8,0,0,1,2.8,2.8v9.365a1.2,1.2,0,0,1-1.969.921L5.456,10.6a.4.4,0,0,0-.512,0L1.969,13.086A1.2,1.2,0,0,1,0,12.165V2.8A2.8,2.8,0,0,1,2.8,0Z" fill="#5a7184"/>
                      </svg>
                    </div>
                </div>
              </div>
              <div>
                <h4 className='pt-5 pb-2 text-lg text-primary-text'>Brighten Up Dull Tired Skin</h4>
                <p className='mb-4 text-sm'>Gravity is an irresistible force. While it is certainly nice that…</p>
                <span className='flex flex-row items-center justify-items-center content-center justify-start gap-4'>
                  <span className='text-base text-secondary font-semibold'>Read More</span>
                  <span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="12.251" height="11.941" viewBox="0 0 12.251 11.941">
                      <path id="arrow-right" d="M6.743,11.748l5.316-5.316a.654.654,0,0,0,0-.927L6.743.193a.654.654,0,0,0-.927,0L5.209.8a.652.652,0,0,0,.011.938L8.515,4.877H.656A.655.655,0,0,0,0,5.533v.875a.655.655,0,0,0,.656.656H8.515L5.22,10.2a.657.657,0,0,0-.011.938l.607.607A.654.654,0,0,0,6.743,11.748Z" fill="#36b37e"/>
                    </svg>
                  </span>
                </span>
              </div>
            </article>
          </div>
        </div>
      </section>
    )
}

export default Blog
