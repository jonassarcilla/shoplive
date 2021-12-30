import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
    return (
      <footer className='bg-white'>
        <div className='container mx-auto flex flex-col flex-wrap gap-x-2 items-center justify-items-center content-center px-5 py-5'>
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
            <section className='flex flex-row gap-3'>
              <div className='grid items-center justify-items-center w-10 h-10 rounded-full bg-highlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="23.616" height="24.165" viewBox="0 0 23.616 24.165">
                  <defs>
                    <clipPath id="clipPath">
                      <path id="Path_13" data-name="Path 13" d="M-345.458,295.186h-11.259v4.668h6.481c-.6,2.966-3.13,4.668-6.481,4.668a7.126,7.126,0,0,1-7.14-7.14,7.126,7.126,0,0,1,7.14-7.14,6.985,6.985,0,0,1,4.449,1.593l3.515-3.515a12.028,12.028,0,0,0-7.964-3.021A12.048,12.048,0,0,0-368.8,297.383a12.048,12.048,0,0,0,12.083,12.083c6.041,0,11.533-4.394,11.533-12.083A10.024,10.024,0,0,0-345.458,295.186Z" transform="translate(368.8 -285.3)" fill="#254a72"/>
                    </clipPath>
                  </defs>
                  <g id="google-g-2015" transform="translate(433.8 -474.3)">
                    <g id="Group_7" data-name="Group 7" transform="translate(-433.8 474.3)">
                      <g id="Group_1" data-name="Group 1" transform="translate(0 0)" clipPath="url(#clipPath)">
                        <path id="Path_12" data-name="Path 12" d="M-370.8,308.58V294.3l9.337,7.14Z" transform="translate(369.702 -289.357)" fill="#254a72" stroke="#254a72" strokeWidth="1"/>
                      </g>
                      <g id="Group_2" data-name="Group 2" transform="translate(0 0)" clipPath="url(#clipPath)">
                        <path id="Path_14" data-name="Path 14" d="M-370.8,289.341l9.337,7.14,3.844-3.35,13.181-2.142V283.3H-370.8Z" transform="translate(369.702 -284.398)" fill="#254a72"/>
                      </g>
                      <g id="Group_4" data-name="Group 4" transform="translate(0 0)">
                        <g id="Group_3" data-name="Group 3" clipPath="url(#clipPath)">
                          <path id="Path_16" data-name="Path 16" d="M-370.8,303.621l16.476-12.632,4.339.549,5.547-8.238v26.362H-370.8Z" transform="translate(369.702 -284.398)" fill="#254a72"/>
                        </g>
                      </g>
                      <g id="Group_6" data-name="Group 6" transform="translate(0 0)">
                        <g id="Group_5" data-name="Group 5" clipPath="url(#clipPath)">
                          <path id="Path_18" data-name="Path 18" d="M-338.578,314.621-355.6,301.44l-2.2-1.648,19.222-5.492Z" transform="translate(363.841 -289.357)" fill="#254a72"/>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg>
              </div>
              <div className='grid items-center justify-items-center content-center w-10 h-10 rounded-full bg-highlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24.226" height="19.695" viewBox="0 0 24.226 19.695">
                  <path id="twitter-6" d="M7.619,19.7A14.048,14.048,0,0,0,21.76,5.549q0-.323-.014-.643a10.109,10.109,0,0,0,2.479-2.575,9.9,9.9,0,0,1-2.854.783A4.99,4.99,0,0,0,23.557.364,9.967,9.967,0,0,1,20.4,1.571a4.975,4.975,0,0,0-8.47,4.534A14.111,14.111,0,0,1,1.686.91,4.978,4.978,0,0,0,3.225,7.548,4.932,4.932,0,0,1,.974,6.926c0,.021,0,.041,0,.064A4.973,4.973,0,0,0,4.96,11.864a4.962,4.962,0,0,1-2.245.085A4.976,4.976,0,0,0,7.359,15.4a9.969,9.969,0,0,1-6.173,2.128A10.089,10.089,0,0,1,0,17.462,14.065,14.065,0,0,0,7.619,19.7" transform="translate(0)" fill="#254a72"/>
                </svg>
              </div>
              <div className='grid items-center justify-items-center content-center w-10 h-10 rounded-full bg-highlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="22.649" height="22.65" viewBox="0 0 22.649 22.65">
                  <path id="instagram-glyph-1" d="M7.551,11.325A3.775,3.775,0,1,1,11.325,15.1a3.775,3.775,0,0,1-3.774-3.775m-2.041,0A5.815,5.815,0,1,0,11.325,5.51,5.815,5.815,0,0,0,5.51,11.325m10.5-6.046a1.359,1.359,0,1,0,1.359-1.358,1.36,1.36,0,0,0-1.359,1.358M6.749,20.543a6.256,6.256,0,0,1-2.1-.39,3.522,3.522,0,0,1-1.3-.847A3.5,3.5,0,0,1,2.5,18a6.256,6.256,0,0,1-.39-2.1c-.055-1.194-.066-1.552-.066-4.577s.012-3.382.066-4.577a6.285,6.285,0,0,1,.39-2.1,3.522,3.522,0,0,1,.847-1.3,3.5,3.5,0,0,1,1.3-.847,6.256,6.256,0,0,1,2.1-.39C7.943,2.051,8.3,2.04,11.325,2.04s3.382.012,4.577.066A6.285,6.285,0,0,1,18,2.5a3.511,3.511,0,0,1,1.3.847,3.515,3.515,0,0,1,.847,1.3,6.256,6.256,0,0,1,.39,2.1c.055,1.195.066,1.552.066,4.577s-.011,3.382-.066,4.577a6.279,6.279,0,0,1-.39,2.1A3.75,3.75,0,0,1,18,20.153a6.256,6.256,0,0,1-2.1.39c-1.194.055-1.552.066-4.577.066s-3.382-.011-4.576-.066M6.656.069A8.307,8.307,0,0,0,3.907.595,5.557,5.557,0,0,0,1.9,1.9,5.542,5.542,0,0,0,.595,3.907,8.307,8.307,0,0,0,.069,6.656C.013,7.863,0,8.249,0,11.325s.013,3.462.069,4.669a8.307,8.307,0,0,0,.526,2.749A5.537,5.537,0,0,0,1.9,20.749a5.554,5.554,0,0,0,2.006,1.306,8.312,8.312,0,0,0,2.749.526c1.208.055,1.594.069,4.669.069s3.462-.013,4.669-.069a8.307,8.307,0,0,0,2.749-.526,5.791,5.791,0,0,0,3.312-3.312,8.284,8.284,0,0,0,.526-2.749c.055-1.208.068-1.594.068-4.669s-.013-3.462-.068-4.669a8.307,8.307,0,0,0-.526-2.749A5.569,5.569,0,0,0,20.749,1.9,5.554,5.554,0,0,0,18.744.595,8.293,8.293,0,0,0,15.995.069C14.787.014,14.4,0,11.326,0S7.864.013,6.656.069" fill="#254a72"/>
                </svg>
              </div>
              <div className='grid items-center justify-items-center content-center w-10 h-10 rounded-full bg-highlight'>
                <svg xmlns="http://www.w3.org/2000/svg" width="19.482" height="21.173" viewBox="0 0 19.482 21.173">
                  <path id="linkedin-icon-1" d="M0,7.46A2.463,2.463,0,0,1,.658,5.7,2.25,2.25,0,0,1,2.369,5a2.184,2.184,0,0,1,1.674.684A2.589,2.589,0,0,1,4.7,7.524a2.409,2.409,0,0,1-.639,1.711,2.255,2.255,0,0,1-1.73.706H2.313A2.152,2.152,0,0,1,.639,9.235,2.544,2.544,0,0,1,0,7.46ZM.244,26.173V11.887H4.419V26.173Zm6.488,0h4.175V18.2a3.466,3.466,0,0,1,.15-1.155,3.107,3.107,0,0,1,.8-1.23,1.889,1.889,0,0,1,1.345-.5q2.106,0,2.106,3.229v7.635h4.175V17.982a7.524,7.524,0,0,0-1.316-4.8,4.244,4.244,0,0,0-3.479-1.636,4.178,4.178,0,0,0-3.78,2.374v.043h-.019l.019-.043V11.887H6.732q.038.684.038,4.256T6.732,26.173Z" transform="translate(0 -5)" fill="#254a72"/>
                </svg>
              </div>
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
        </div>
      </footer>
    )
}

export default Footer
