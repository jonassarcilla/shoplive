import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
    return (
      <section>
          <div className='bg-secondary-2'>
            <div className='container mx-auto flex flex-col flex-wrap px-3 py-9 '>
              <p className='text-center'>Samsungs</p>
              <h2 className='text-3xl text-primary-text text-center'>Get Special Watch with Special Prices</h2>
              <ul className='text-muted text-center m-6 hero-list text-base secondary-text'>
                <li className='py-3.5'>Newest OS Support</li>
                <li className='py-3.5'>Water and Dust Resistant</li>
                <li className='py-3.5'>Long lasting battery life</li>
                <li className='py-3.5'>Get a 20% Cashback right now</li>
              </ul>

              <div className='flex-auto flex flex-col flex-wrap items-center justify-items-center content-center px-2.5 py-2.5 bg-white rounded-lg'>
                <input type="text" className='w-full px-2.5 py-3.5' placeholder='Insert your email' autoComplete='no'/>
                <button className='bg-secondary py-3.5 w-full rounded-lg text-white mt-2'>Join Pre-Order</button>
              </div>
            </div>
          </div>
      </section>
    )
}

export default Hero
