import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Promotions = () => {
    return (
        <section className='bg-accent'>
            <div className='flex flex-col container mx-auto pt-10 px-5'>
                <h3 className='mb-5 text-4xl text-center text-white font-semibold'>Download ShopLive now and Get Promo Everyday</h3>
                <div className='flex flex-row mx-auto px-5 pb-9 gap-4'>
                    <button className='flex flex-row flex-auto items-center justify-items-center rounded-lg gap-2 bg-black text-xs text-white px-2 py-2' aria-label="Download on the Apple Store">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg" width="31.393" height="33.732" viewBox="0 0 31.393 33.732">
                                <path id="apple" d="M17.321,2.935A8.725,8.725,0,0,1,23.369,0a6.567,6.567,0,0,1-1.99,5.392,7,7,0,0,1-5.735,2.363S15.071,5.533,17.321,2.935ZM15.966,9.679c1.3,0,3.717-1.567,6.862-1.567,5.413,0,7.542,3.374,7.542,3.374s-4.165,1.865-4.165,6.391c0,5.105,5.188,6.865,5.188,6.865s-3.627,8.941-8.525,8.941c-2.25,0-4-1.328-6.37-1.328-2.416,0-4.813,1.378-6.375,1.378C5.651,33.732,0,25.25,0,18.432,0,11.724,4.783,8.205,9.27,8.205c2.917,0,5.18,1.473,6.7,1.473Z" fill="#fff"/>
                            </svg>
                        </span>
                        <span>
                            Download on the <span className='block text-lg'>Apple Store</span>
                        </span>
                    </button>
                    <button className='flex flex-row flex-auto items-center justify-items-center gap-2 rounded-lg bg-black text-xs text-white px-2 py-2' aria-label="Get it on Google Play">
                        <span>
                            <svg xmlns="http://www.w3.org/2000/svg"  width="30.627" height="35.045" viewBox="0 0 30.627 35.045">
                                <defs>
                                    <linearGradient id="linear-gradient" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#63be6b"/>
                                    <stop offset="0.506" stop-color="#5bbc6a"/>
                                    <stop offset="1" stop-color="#4ab96a"/>
                                    </linearGradient>
                                    <linearGradient id="linear-gradient-2" y1="0.5" x2="0.999" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#3ec6f2"/>
                                    <stop offset="1" stop-color="#45afe3"/>
                                    </linearGradient>
                                    <linearGradient id="linear-gradient-3" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#faa51a"/>
                                    <stop offset="0.387" stop-color="#fab716"/>
                                    <stop offset="0.741" stop-color="#fac412"/>
                                    <stop offset="1" stop-color="#fac80f"/>
                                    </linearGradient>
                                    <linearGradient id="linear-gradient-4" y1="0.5" x2="1" y2="0.5" gradientUnits="objectBoundingBox">
                                    <stop offset="0" stop-color="#ec3b50"/>
                                    <stop offset="1" stop-color="#e7515b"/>
                                    </linearGradient>
                                </defs>
                                <g id="google-play-5" transform="translate(0 0.001)">
                                    <path id="Path_8" data-name="Path 8" d="M19.645,10.681,1.126.1A.746.746,0,0,0,.375.1.741.741,0,0,0,0,.75s.008.976.015,2.582L13.5,16.821Z" transform="translate(0 0)" fill="url(#linear-gradient)"/>
                                    <path id="Path_9" data-name="Path 9" d="M.2,44.4c.023,5.8.09,19.863.12,26.866L13.7,57.889Z" transform="translate(-0.185 -41.068)" fill="url(#linear-gradient-2)"/>
                                    <path id="Path_10" data-name="Path 10" d="M196.547,148.358l-10.6-6.058-6.148,6.14,6.936,6.936,9.819-5.72a.75.75,0,0,0,.375-.646A.76.76,0,0,0,196.547,148.358Z" transform="translate(-166.303 -131.619)" fill="url(#linear-gradient-3)"/>
                                    <path id="Path_11" data-name="Path 11" d="M1.7,237.569c.015,2.5.023,4.1.023,4.1a.732.732,0,0,0,.375.646.746.746,0,0,0,.751,0l19.165-11.177L15.077,224.2Z" transform="translate(-1.572 -207.371)" fill="url(#linear-gradient-4)"/>
                                </g>
                            </svg>
                        </span>
                        <span>
                            Get it on <span className='block text-lg'>Google Play</span>
                        </span>
                    </button>
                </div>
                <div className='h-48 rounded-t-lg mx-auto'>
                    <Image
                        src="/assets/img/products/app-promotion.png"
                        width={283}
                        height={193}
                        alt='Download Shoplive'
                    />
                </div>
            </div>
        </section>
    )
}

export default Promotions
