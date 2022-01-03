import React from 'react'
import Image from 'next/image'

const HotItem = () => {
    return (
        <section className='relative bg-secondary-2'>
            <div className='relative container mx-auto flex flex-col flex-wrap px-3 py-9 z-10'>
              <h3 className='text-center text-3xl'>🔥 Hot Item</h3>
              <div className='flex flex-col my-9 bg-white rounded-lg'>
                {/* item wrapper */}
                <div className='group cursor-pointer pt-10'>
                  <div className='flex flex-col mx-2 pb-8 border-b-2'>
                    <div className='grid justify-items-center'>
                      <div className='w-32 h-32 rounded-lg'>
                        <Image
                          src="/assets/img/products/asus-zenbook.png"
                          width={128}
                          height={128}
                          alt='Asus Zenbook'
                        />
                      </div>
                    </div>
                    <h4 className='pt-6 text-center text-lg text-primary-text'>Asus Zenbook Pro 13&quot;</h4>
                    <p className='pt-3 text-center text-sm text-muted'>The specification here</p>
                    <p className='pt-5 text-center text-xl text-secondary font-semibold'>$1,500.00</p>
                  </div>
                </div>

                <div className='group cursor-pointer pt-10'>
                  <div className='flex flex-col mx-2 pb-8 border-b-2'>
                    <div className='grid justify-items-center'>
                      <div className='w-32 h-32 rounded-lg'>
                        <Image
                          src="/assets/img/products/modern-blender.png"
                          width={128}
                          height={128}
                          alt='Modena Juice Blender'
                        />
                      </div>
                    </div>
                    <h4 className='pt-6 text-center text-lg text-primary-text'>Modena Juice Blender</h4>
                    <p className='pt-3 text-center text-sm text-muted'>The specification here</p>
                    <p className='pt-5 text-center text-xl text-secondary font-semibold'>$1,500.00</p>
                  </div>
                </div>

                <div className='group cursor-pointer pt-10'>
                  <div className='flex flex-col mx-2 pb-8 border-b-2'>
                    <div className='grid justify-items-center'>
                      <div className='w-32 h-32 rounded-lg'>
                        <Image
                          src="/assets/img/products/leica-camera.png"
                          width={128}
                          height={128}
                          alt='Leica M3 1972'
                        />
                      </div>
                    </div>
                    <h4 className='pt-6 text-center text-lg text-primary-text'>Leica M3 1972</h4>
                    <p className='pt-3 text-center text-sm text-muted'>The specification here</p>
                    <p className='pt-5 text-center text-xl text-secondary font-semibold'>$1,500.00</p>
                  </div>
                </div>

                <div className='group cursor-pointer pt-10'>
                  <div className='flex flex-col mx-2 pb-8'>
                    <div className='grid justify-items-center'>
                      <div className='w-32 h-32 rounded-lg'>
                        <Image
                          src="/assets/img/products/ipad-pro-2018.png"
                          width={128}
                          height={128}
                          alt='iPad Pro 2018'
                        />
                      </div>
                    </div>
                    <h4 className='pt-6 text-center text-lg text-primary-text'>iPad Pro 2018</h4>
                    <p className='pt-3 text-center text-sm text-muted'>The specification here</p>
                    <p className='pt-5 text-center text-xl text-secondary font-semibold'>$1,500.00</p>
                  </div>
                </div>

                <div className='grid justify-items-center pt-5 pb-16'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="7.246" height="11.941" viewBox="0 0 7.246 11.941">
                    <path id="chevron-right" d="M1.74,11.748,7.054,6.434a.656.656,0,0,0,0-.928L1.74.192a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L4.4,5.97.191,10.2a.656.656,0,0,0,0,.927l.62.62A.656.656,0,0,0,1.74,11.748Z" fill="#183b56"/>
                  </svg>
                </div>
              </div>

              <div className='flex flex-col mx-2 border-b-2'>
                <button className='py-5 mb-9 rounded-lg bg-secondary text-base text-white font-semibold'>See All Products</button>
              </div>
            </div>

            <div className='absolute top-0 left-0 w-full'>
              <div className="flex items-stretch bg-secondary opacity-10">
                <div className="py-40">&nbsp;</div>
              </div>
            </div>
        </section>
    )
}

export default HotItem
