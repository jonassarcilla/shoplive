import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='bg-white container mx-auto flex flex-col flex-wrap gap-x-2 items-center justify-items-center content-center px-5 py-5'>
          <div className='flex flex-col flex-wrap gap-x-2 items-center justify-items-center content-center pb-14 order-last'>
            <h2 className="font-bold text-2xl flex-auto items-center flex flex-col justify-items-center content-center">
              <Link href="/">
                <a className="flex flex-row flex-wrap gap-x-2 items-center text-accent">
                  <svg id="Logo" xmlns="http://www.w3.org/2000/svg" width="77.143" height="24" viewBox="0 0 77.143 24">
                    <defs>
                      <linearGradient id="linear-gradient" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                        <stop offset="0" stopColor="#254a72"/>
                        <stop offset="1" stopColor="#10243e"/>
                      </linearGradient>
                    </defs>
                    <g id="Logo-2" data-name="Logo">
                      <path id="Combined_Shape" data-name="Combined Shape" d="M41.8,24a16.975,16.975,0,0,1-2.517-.157,2.316,2.316,0,0,1-1.127-.4.757.757,0,0,1-.227-.543V21.429a.824.824,0,0,1,.227-.6.782.782,0,0,1,.587-.234h.493l1.748.228q1.592,0,2.371-1.986a5.42,5.42,0,0,1-3.518-2.007c-1.631-2.044-1.732-2.705-2.462-5.045L35.387,5.319a.718.718,0,0,1-.04-.247.585.585,0,0,1,.167-.341.65.65,0,0,1,.5-.215l2.623.012a1.225,1.225,0,0,1,.74.261,1.183,1.183,0,0,1,.46.65l1.747,5.678a8.915,8.915,0,0,0,1.327,2.893,2.021,2.021,0,0,0,1.594.8l2.654-9.374a1.261,1.261,0,0,1,.419-.65,1.066,1.066,0,0,1,.7-.261h2.814a.574.574,0,0,1,.493.214.65.65,0,0,1,.16.355.91.91,0,0,1-.026.235L48.226,17.839a11.174,11.174,0,0,1-2.314,4.741A4.738,4.738,0,0,1,42.358,24ZM57.794,19.48a7.84,7.84,0,0,1-4.528-1.238,4.021,4.021,0,0,1-1.76-3.482A3.95,3.95,0,0,1,53.273,11.3,7.967,7.967,0,0,1,57.828,10.1h4.415a2.947,2.947,0,0,0-.653-2.183A3.339,3.339,0,0,0,59.3,7.3,2.961,2.961,0,0,0,57.1,8l-.092.1a1.458,1.458,0,0,1-1.165.352,10.764,10.764,0,0,1-1.9-.233A1.6,1.6,0,0,1,52.8,7.607a.706.706,0,0,1-.063-.577A3.512,3.512,0,0,1,54.98,4.952a13.815,13.815,0,0,1,4.862-.693,8.372,8.372,0,0,1,5.094,1.427A5.154,5.154,0,0,1,66.856,10.1v8.29a.779.779,0,0,1-.814.817H63.469a.784.784,0,0,1-.587-.234.81.81,0,0,1-.227-.583v-.415A8.113,8.113,0,0,1,57.82,19.48Zm-1.121-5.886a1.477,1.477,0,0,0-.54,1.179,1.5,1.5,0,0,0,.56,1.192,2.419,2.419,0,0,0,1.588.469,7.344,7.344,0,0,0,3.961-1.206V13.138H58.148A2.226,2.226,0,0,0,56.674,13.594ZM7.789,19.473a8.014,8.014,0,0,1-5.735-1.956A7.441,7.441,0,0,1,0,11.886,7.484,7.484,0,0,1,2.067,6.234,8,8,0,0,1,7.8,4.259,8.083,8.083,0,0,1,13.523,6.18a7.215,7.215,0,0,1,2.054,5.512v.763a.8.8,0,0,1-.827.831H4.708a3.566,3.566,0,0,0,.941,2.4,3.72,3.72,0,0,0,2.58.751,3.016,3.016,0,0,0,2.427-.8,1.354,1.354,0,0,1,1.146-.41,10.97,10.97,0,0,1,1.412.137,1.961,1.961,0,0,1,1.4.684.572.572,0,0,1,.131.393c-.406,2.1-2.536,3.04-6.9,3.04ZM4.681,10.46h6.2C10.794,8.363,9.755,7.3,7.795,7.3S4.787,8.363,4.681,10.46Zm24.9,8.745a.8.8,0,0,1-.814-.816V10.7c0-2.134-.85-2.786-2.548-2.786-1.111,0-2.3,1.141-3.574,2.418v8.055a.8.8,0,0,1-.814.816H18.845a.8.8,0,0,1-.814-.816V.831a.811.811,0,0,1,.233-.6A.788.788,0,0,1,18.845,0h2.987a.788.788,0,0,1,.58.234.811.811,0,0,1,.233.6V6.2a7.447,7.447,0,0,1,4.888-1.942,5.787,5.787,0,0,1,4.221,1.588A6.506,6.506,0,0,1,33.382,10.7v7.688a.793.793,0,0,1-.233.582.805.805,0,0,1-.594.234Z" fill="url(#linear-gradient)"/>
                      <circle id="Oval" cx="3.429" cy="3.429" r="3.429" transform="translate(70.286 5.143)" fill="#1576d8"/>
                    </g>
                  </svg>
                  <span className='hidden'>ShopLive</span>
                </a>
              </Link>
            </h2>
            <p className='text-center text-sm text-muted py-6'>Build a modern and creative website with Moonheads Digital</p>
            <section className='flex flex-row'>
              <div className='flex flex-col items-center justify-items-center content-center w-10 h-10 rounded-full bg-muted'>g</div>
              <div className='flex flex-col items-center justify-items-center content-center w-10 h-10 rounded-full bg-muted'>tw</div>
              <div className='flex flex-col items-center justify-items-center content-center w-10 h-10 rounded-full bg-muted'>ig</div>
              <div className='flex flex-col items-center justify-items-center content-center w-10 h-10 rounded-full bg-muted'>ln</div>
            </section>
          </div>
          <div className='grid grid-cols-2 gap-8 py-12 text-primary-text text-left'>
            <div>
              <h3 className='text-base'>Product</h3>
              <ul className='text-sm'>
                <li className='py-1'><a href='#'>Landing Page</a></li>
                <li className='py-1'><a href='#'>Features</a></li>
                <li className='py-1'><a href='#'>Documentation</a></li>
                <li className='py-1'><a href='#'>Referral Program</a></li>
                <li className='py-1'><a href='#'>Pricing</a></li>
              </ul>
            </div>
            <div>
              <h3>Services</h3>
              <ul className='text-sm'>
                <li className='py-1'><a href='#'>Documentation</a></li>
                <li className='py-1'><a href='#'>Design</a></li>
                <li className='py-1'><a href='#'>Themes</a></li>
                <li className='py-1'><a href='#'>Illustrations</a></li>
                <li className='py-1'><a href='#'>UI Kit</a></li>
              </ul>
            </div>
            <div>
              <h3>Company</h3>
              <ul className='text-sm'>
                <li className='py-1'><a href='#'>About</a></li>
                <li className='py-1'><a href='#'>Terms</a></li>
                <li className='py-1'><a href='#'>Privacy Policy</a></li>
                <li className='py-1'><a href='#'>Careers</a></li>
              </ul>
            </div>
            <div>
              <h3>More</h3>
              <ul className='text-sm'>
                <li className='py-1'><a href='#'>Documentation</a></li>
                <li className='py-1'><a href='#'>License</a></li>
                <li className='py-1'><a href='#'>Change Log</a></li>
              </ul>
            </div>
          </div>
        </footer>
    )
}

export default Footer
