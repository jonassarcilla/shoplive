import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const ProductRecommendation = () => {
    return (
        <section className='bg-white'>
          <div className='container mx-auto flex flex-col flex-wrap bg-white px-5 py-16'>
            <div className='flex flex-col text-center'>
              <h2 className='text-3xl font-semibold text-primary-text'>
                Product Recommendation
                <p className='text-base font-normal py-6 text-secondary-text'>You can choose what our recommendation product here</p>
              </h2>
            </div>
            <div className='flex flex-col gap-5'>
              {/* item wrapper */}
              <div className='group'>
                <div className='flex flex-col flex-wrap px-5 py-5 cursor-pointer rounded-xl group-hover:bg-highlight'>
                <div className='grid justify-items-end'>
                  <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                    <Link href="/">
                      <button aria-label="Like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.6" height="12" viewBox="0 0 13.6 12">
                          <path id="Path" d="M7.118,1.112a3.8,3.8,0,0,1,5.37,5.368l-5.4,5.4a.4.4,0,0,1-.566,0l-5.4-5.4a3.8,3.8,0,0,1,5.37-5.368l.318.318Z" fill="#5a7184"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='grid justify-items-center mb-11'>
                  <div className='w-28 h-28 rounded-lg'>
                    <Image
                      src="/assets/img/products/Blender.png"
                      width={112}
                      height={112}
                      alt='Moderna Juice and Vege Blender Silver'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h4 className='text-center text-lg font-semibold text-primary-text'>Moderna Juice & Vege Blender Silver</h4>
                  <div className='flex flex-row items-start py-5 gap-4'>
                    <p className='text-base text-primary-text'>$1,500.00</p>
                    <p className='text-base line-through text-muted'>$2,000.00</p>
                  </div>
                </div>
                <div className='flex flex-col px-5'>
                    <button className='flex flex-auto rounded-md justify-items-center py-4 group-hover:bg-secondary'>
                      <span className='mx-auto text-secondary group-hover:text-white'>Buy Now</span>
                    </button>
                </div>
                </div>
              </div>

              <div className='group'>
                <div className='flex flex-col flex-wrap px-5 py-5 cursor-pointer rounded-xl group-hover:bg-highlight'>
                <div className='grid justify-items-end'>
                  <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                    <Link href="/">
                      <button aria-label="Like">
                        <svg xmlns="http://www.w3.org/2000/svg" width="13.6" height="12" viewBox="0 0 13.6 12">
                          <path id="Path" d="M7.118,1.112a3.8,3.8,0,0,1,5.37,5.368l-5.4,5.4a.4.4,0,0,1-.566,0l-5.4-5.4a3.8,3.8,0,0,1,5.37-5.368l.318.318Z" fill="#5a7184"/>
                        </svg>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='grid justify-items-center mb-11'>
                  <div className='w-28 h-28 rounded-lg'>
                    <Image
                      src="/assets/img/products/leica-camera.png"
                      width={112}
                      height={112}
                      alt='Leica Camera'
                    />
                  </div>
                </div>
                <div className='flex flex-col items-center'>
                  <h4 className='text-center text-lg font-semibold text-primary-text'>Leica M3 with APO-Summicron 50mm 1:2</h4>
                  <div className='flex flex-row items-start py-5 gap-4'>
                    <p className='text-base text-primary-text'>$1,500.00</p>
                    <p className='text-base line-through text-muted'>$2,000.00</p>
                  </div>
                </div>
                <div className='flex flex-col px-5'>
                    <button className='flex flex-auto rounded-md justify-items-center py-4 group-hover:bg-secondary'>
                      <span className='mx-auto text-secondary group-hover:text-white'>Buy Now</span>
                    </button>
                </div>
                </div>
              </div>

              <div className='group'>
                <div className='flex flex-col flex-wrap px-5 py-5 cursor-pointer rounded-xl group-hover:bg-highlight'>
                  <div className='grid justify-items-end'>
                    <div className='w-9 h-9 bg-accent-3 rounded-full flex items-center justify-items-center content-center justify-center'>
                      <Link href="/">
                        <button aria-label="Like">
                          <svg xmlns="http://www.w3.org/2000/svg" width="13.6" height="12" viewBox="0 0 13.6 12">
                            <path id="Path" d="M7.118,1.112a3.8,3.8,0,0,1,5.37,5.368l-5.4,5.4a.4.4,0,0,1-.566,0l-5.4-5.4a3.8,3.8,0,0,1,5.37-5.368l.318.318Z" fill="#5a7184"/>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                  <div className='grid justify-items-center mb-11'>
                    <div className='w-28 h-28 rounded-lg'>
                      <Image
                        src="/assets/img/products/asus-zenbook.png"
                        width={112}
                        height={112}
                        alt='Headphones'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col items-center'>
                    <h4 className='text-center text-lg font-semibold text-primary-text'>Asus Zenbook Pro 13” UX-430 US 2018</h4>
                    <div className='flex flex-row items-start py-5 gap-4'>
                      <p className='text-base text-primary-text'>$1,500.00</p>
                      <p className='text-base line-through text-muted'>$2,000.00</p>
                    </div>
                  </div>
                  <div className='flex flex-col px-5'>
                      <button className='flex flex-auto rounded-md justify-items-center py-4 group-hover:bg-secondary'>
                        <span className='mx-auto text-secondary group-hover:text-white'>Buy Now</span>
                      </button>
                  </div>
                </div>
              </div>

              <div className='group'>
                <div className='flex flex-col flex-wrap px-5 py-5 cursor-pointer rounded-xl bg-special'>
                  <h4 className='my-4 text-center text-xl text-white'>Apple Watch 4 2020</h4>
                  {/* count down timer */}
                  <div className="flex flex-row justify-center">
                    <div className='relative flex flex-col justify-center px-2 py-1 rounded-md overflow-hidden'>
                      <span className='text-sm text-white'>10</span>
                      <span className='absolute top-0 left-0 w-32 h-32 bg-white opacity-10'>&nbsp;</span>
                    </div>
                    <div>
                      <span className='flex flex-col justify-center px-2 py-1 text-white'>:</span>
                    </div>
                    <div className='relative flex flex-col justify-center px-2 py-1 rounded-md overflow-hidden'>
                      <span className='text-sm text-white'>25</span>
                      <span className='absolute top-0 left-0 w-32 h-32 bg-white opacity-10'>&nbsp;</span>
                    </div>
                    <div>
                      <span className='flex flex-col justify-center px-2 py-1 text-white'>:</span>
                    </div>
                    <div className='relative flex flex-col justify-center px-2 py-1 rounded-md overflow-hidden'>
                      <span className='text-sm text-white'>54</span>
                      <span className='absolute top-0 left-0 w-32 h-32 bg-white opacity-10'>&nbsp;</span>
                    </div>
                  </div>
                  <div className='grid justify-items-center my-11'>
                    <div className='w-32 h-32 rounded-lg bg-whitew'>
                      <Image
                        src="/assets/img/products/apple-watch-2.png"
                        width={128}
                        height={128}
                        alt='Headphones'
                      />
                    </div>
                  </div>
                  <div className='flex flex-col px-5'>
                      <button className='flex flex-auto rounded-md justify-items-center py-4 bg-white group-hover:bg-special'>
                        <span className='mx-auto font-semibold text-special group-hover:text-white'>Buy Now $1,500.00</span>
                      </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    )
}

export default ProductRecommendation
