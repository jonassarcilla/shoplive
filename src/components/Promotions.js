import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Promotions = () => {
    return (
        <section className='bg-accent'>
            <div className='flex flex-col container mx-auto pt-10 px-5'>
                <h3 className='mb-5 text-lg text-center text-white font-bold'>Download ShopLive now and Get Promo Everyday</h3>
                <div className='flex flex-row px-5 pb-9 gap-4'>
                <button className='flex-auto rounded-lg bg-black'>&nbsp;</button>
                <button className='flex-auto rounded-lg bg-black'>&nbsp;</button>
                </div>
                <div className='h-48 rounded-t-lg bg-white'>&nbsp;</div>
            </div>
        </section>
    )
}

export default Promotions
