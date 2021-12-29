import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Categories = () => {
    return (
        <section className='container mx-auto flex flex-col pt-8 pb-14 bg-white'>
            <div className="grid grid-cols-2 gap-5 mx-5">
              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                  <svg id="iconspace_Tshirt_B" data-name="iconspace_Tshirt B" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                    <path id="Shape-2" data-name="Shape" d="M8,38a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V16h6a2,2,0,0,0,2-2V6a6,6,0,0,0-6-6H26A6,6,0,0,1,14,0H6A6,6,0,0,0,0,6v8a2,2,0,0,0,2,2H8Z" transform="translate(12 12)" fill="#fff"/>
                    <rect id="Shape-3" data-name="Shape" width="8" height="4" transform="translate(12 24)" fill="#36b37e"/>
                    <rect id="Shape-4" data-name="Shape" width="8" height="4" transform="translate(44 24)" fill="#36b37e"/>
                    <rect id="Shape-5" data-name="Shape" width="24" height="4" transform="translate(20 48)" fill="#36b37e"/>
                    <path id="Shape-6" data-name="Shape" d="M0,0H7A0,0,0,0,1,7,0V2.5A3.5,3.5,0,0,1,3.5,6h0A3.5,3.5,0,0,1,0,2.5V0A0,0,0,0,1,0,0Z" transform="translate(33 23)" fill="#ffc200"/>
                    <path id="Shape-7" data-name="Shape" d="M24,1V27a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1V1A1,1,0,0,0,0,1V27a3,3,0,0,0,3,3H23a3,3,0,0,0,3-3V1a1,1,0,0,0-2,0Z" transform="translate(19 23)" fill="#183b56"/>
                    <path id="Shape-8" data-name="Shape" d="M11,42a3,3,0,0,1-3-3V18H3a3,3,0,0,1-3-3V7A7,7,0,0,1,7,0h8a1,1,0,0,1,1,1A5,5,0,1,0,26,1a1,1,0,0,1,1-1h8a7,7,0,0,1,7,7v8a3,3,0,0,1-3,3H34V39a3,3,0,0,1-3,3Z" transform="translate(11 11)" fill="#183b56"/>
                  </svg>
                  <h3 className='pt-5 text-base text-primary-text font-semibold'>Fashion</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                    <svg id="iconspace_android_phone" data-name="iconspace_android phone" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                      <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                      <path id="Shape-2" data-name="Shape" d="M24,2V38a2,2,0,0,1-2,2H2a2,2,0,0,1-2-2V2A2,2,0,0,1,2,0H22A2,2,0,0,1,24,2Z" transform="translate(20 12)" fill="#fff"/>
                      <path id="Shape-3" data-name="Shape" d="M3,42a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0H23a3,3,0,0,1,3,3V39a3,3,0,0,1-3,3Z" transform="translate(19 11)" fill="#183b56"/>
                      <path id="Shape-4" data-name="Shape" d="M1,2H5A1,1,0,0,0,5,0H1A1,1,0,0,0,1,2Z" transform="translate(29 47)" fill="#ffc200"/>
                      <path id="Shape-5" data-name="Shape" d="M1,0H17a1,1,0,0,1,1,1V29a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0Z" transform="translate(23 15)" fill="#36b37e"/>
                    </svg>
                    <h3 className='pt-5 text-base text-primary-text font-semibold'>Handphone</h3>
                </div>
              </div>
              
              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                    <svg id="iconspace_Notebook" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                      <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                      <path id="Shape-2" data-name="Shape" d="M3,0H33a3,3,0,0,1,3,3V24a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V3A3,3,0,0,1,3,0Z" transform="translate(14 13)" fill="#183b56"/>
                      <path id="Shape-3" data-name="Shape" d="M32,21V1a1,1,0,0,0-1-1H1A1,1,0,0,0,0,1V21Z" transform="translate(16 15)" fill="#36b37e"/>
                      <rect id="Shape-4" data-name="Shape" width="28" height="17" rx="1" transform="translate(18 17)" fill="#fff"/>
                      <path id="Shape-5" data-name="Shape" d="M2.69,0H38.281l2.614,11.325A3,3,0,0,1,37.972,15H3A3,3,0,0,1,.077,11.325Z" transform="translate(11.514 36)" fill="#183b56"/>
                      <path id="Shape-6" data-name="Shape" d="M.026,9.775A1,1,0,0,0,1,11H35.972a1,1,0,0,0,.974-1.225L34.69,0H2.281Z" transform="translate(13.514 38)" fill="#fff"/>
                      <path id="Shape-7" data-name="Shape" d="M1.626.777A1,1,0,0,1,2.6,0H13.4a1,1,0,0,1,.975.777l1.6,7A1,1,0,0,1,15,9H1A1,1,0,0,1,.026,7.777Z" transform="translate(24 42)" fill="#183b56"/>
                      <path id="Shape-8" data-name="Shape" d="M0,5H11.491L10.348,0H1.143Z" transform="translate(26.254 44)" fill="#ffc200"/>
                    </svg>
                    <h3 className='pt-5 text-base text-primary-text font-semibold'>Laptop</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                  <svg id="iconspace_Not_C" data-name="iconspace_Not C" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                    <ellipse id="Shape-2" data-name="Shape" cx="6" cy="5" rx="6" ry="5" transform="translate(10 40)" fill="#fff"/>
                    <ellipse id="Shape-3" data-name="Shape" cx="6" cy="5" rx="6" ry="5" transform="translate(34 36)" fill="#fff"/>
                    <ellipse id="Shape-4" data-name="Shape" cx="6" cy="5" rx="6" ry="5" transform="translate(10 40)" fill="#36b37e"/>
                    <ellipse id="Shape-5" data-name="Shape" cx="6" cy="5" rx="6" ry="5" transform="translate(34 36)" fill="#ffc200"/>
                    <path id="Path" d="M7.5.158C4.912.713,3,2.67,3,5S4.912,9.287,7.5,9.842A7.152,7.152,0,0,1,6,10C2.686,10,0,7.761,0,5S2.686,0,6,0A7.152,7.152,0,0,1,7.5.158Z" transform="translate(10 40)" fill="#fff"/>
                    <path id="Shape-6" data-name="Shape" d="M7.5.158C4.912.713,3,2.67,3,5S4.912,9.287,7.5,9.842A7.152,7.152,0,0,1,6,10C2.686,10,0,7.761,0,5S2.686,0,6,0A7.152,7.152,0,0,1,7.5.158Z" transform="translate(34 36)" fill="#fff"/>
                    <path id="Shape-7" data-name="Shape" d="M0,6C0,2.641,3.17,0,7,0s7,2.641,7,6-3.171,6-7,6S0,9.358,0,6Z" transform="translate(9 39)" fill="#183b56"/>
                    <path id="Shape-8" data-name="Shape" d="M0,6C0,2.641,3.17,0,7,0s7,2.641,7,6-3.171,6-7,6S0,9.358,0,6Z" transform="translate(33 35)" fill="#183b56"/>
                    <path id="Shape-9" data-name="Shape" d="M2,8.713,24,2.332v28.33a1,1,0,0,0,2,0V1A1,1,0,0,0,24.721.04L.721,7A1,1,0,0,0,0,7.962v26.7a1,1,0,0,0,2,0Z" transform="translate(21 10.052)" fill="#183b56"/>
                    <path id="Shape-10" data-name="Shape" d="M0,13.947V7.961A1,1,0,0,1,.722,7l24-6.961A1,1,0,0,1,26,1V6.947a1,1,0,0,1-.72.96l-24,7A1,1,0,0,1,0,13.947Z" transform="translate(21 10.052)" fill="#154e84"/>
                  </svg>
                    <h3 className='pt-5 text-base text-primary-text font-semibold'>Music</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                  <svg id="iconspace_Camera_" data-name="iconspace_Camera " xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                    <path id="Shape-2" data-name="Shape" d="M9.42,7l3.136-5.488A3,3,0,0,1,15.161,0H26.839a3,3,0,0,1,2.6,1.512L32.58,7H39a3,3,0,0,1,3,3V35a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V10A3,3,0,0,1,3,7Z" transform="translate(11 13)" fill="#183b56"/>
                    <path id="Shape-3" data-name="Shape" d="M8,7H1A1,1,0,0,0,0,8V33a1,1,0,0,0,1,1H37a1,1,0,0,0,1-1V8a1,1,0,0,0-1-1H30a1,1,0,0,1-.868-.5L25.708.5a1,1,0,0,0-.868-.5H13.161a1,1,0,0,0-.868.5L8.868,6.5A1,1,0,0,1,8,7Z" transform="translate(13 15)" fill="#fff"/>
                    <path id="Shape-4" data-name="Shape" d="M-.766,0h16L12.525-4.514A1,1,0,0,0,11.668-5H2.8a1,1,0,0,0-.857.486Z" transform="translate(24.766 22)" fill="#36b37e"/>
                    <path id="Shape-5" data-name="Shape" d="M10,20A10,10,0,1,0,0,10,10,10,0,0,0,10,20Z" transform="translate(22 26)" fill="#183b56"/>
                    <path id="Shape-6" data-name="Shape" d="M8,16a8,8,0,1,1,8-8A8,8,0,0,1,8,16Z" transform="translate(24 28)" fill="#36b37e"/>
                    <circle id="Shape-7" data-name="Shape" cx="6" cy="6" r="6" transform="translate(26 30)" fill="#fff"/>
                    <circle id="Shape-8" data-name="Shape" cx="2" cy="2" r="2" transform="translate(16 25)" fill="#ffc200"/>
                  </svg>
                  <h3 className='pt-5 text-base text-primary-text font-semibold'>Photography</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                  <svg id="iconspace_Chair" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <circle id="Shape" cx="32" cy="32" r="32" fill="none"/>
                    <path id="Shape-2" data-name="Shape" d="M30,21a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V7A7,7,0,0,1,7,0H23a7,7,0,0,1,7,7Z" transform="translate(17 14)" fill="#183b56"/>
                    <path id="Shape-3" data-name="Shape" d="M26,18V5a5,5,0,0,0-5-5H5A5,5,0,0,0,0,5V18Z" transform="translate(19 16)" fill="#fff"/>
                    <path id="Shape-4" data-name="Shape" d="M0,5A5,5,0,0,1,10,5V21a1,1,0,0,1-1,1H5a3,3,0,0,1-3-3V9A5,5,0,0,1,0,5Z" transform="translate(11 24)" fill="#183b56"/>
                    <path id="Shape-5" data-name="Shape" d="M6,18V3A3,3,0,1,0,1.5,5.6a1,1,0,0,1,.5.866V17a1,1,0,0,0,1,1Z" transform="translate(13 26)" fill="#fff"/>
                    <path id="Shape-6" data-name="Shape" d="M0,5A5,5,0,0,0-5,0a5,5,0,0,0-5,5V21a1,1,0,0,0,1,1h4a3,3,0,0,0,3-3V9A5,5,0,0,0,0,5Z" transform="translate(53 24)" fill="#183b56"/>
                    <path id="Shape-7" data-name="Shape" d="M-6,18V3A3,3,0,0,1-3,0,3,3,0,0,1,0,3,3,3,0,0,1-1.5,5.6a1,1,0,0,0-.5.866V17a1,1,0,0,1-1,1Z" transform="translate(51 26)" fill="#fff"/>
                    <path id="Shape-8" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H25a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H1A1,1,0,0,1,0,6Z" transform="translate(19 39)" fill="#154e84"/>
                    <path id="Shape-9" data-name="Shape" d="M0,0V3H22V0Z" transform="translate(21 41)" fill="#ffc200"/>
                    <path id="Shape-10" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H5A1,1,0,0,1,6,1V4A2,2,0,0,1,4,6H2A2,2,0,0,1,0,4Z" transform="translate(15 44)" fill="#183b56"/>
                    <path id="Shape-11" data-name="Shape" d="M0,0V2H2V0Z" transform="translate(17 46)" fill="#36b37e"/>
                    <path id="Shape-12" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H5A1,1,0,0,1,6,1V4A2,2,0,0,1,4,6H2A2,2,0,0,1,0,4Z" transform="translate(43 44)" fill="#183b56"/>
                    <path id="Shape-13" data-name="Shape" d="M0,0V2H2V0Z" transform="translate(45 46)" fill="#36b37e"/>
                    <path id="Shape-14" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H25a1,1,0,0,1,1,1V6a1,1,0,0,1-1,1H1A1,1,0,0,1,0,6Z" transform="translate(19 34)" fill="#154e84"/>
                    <path id="Shape-15" data-name="Shape" d="M0,0V3H22V0Z" transform="translate(21 36)" fill="#36b37e"/>
                  </svg>
                  <h3 className='pt-5 text-base text-primary-text font-semibold'>Furniture</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <g id="iconspace_Stethoscope_B" data-name="iconspace_Stethoscope B" transform="translate(-2 -2)">
                      <circle id="Shape" cx="32" cy="32" r="32" transform="translate(2 2)" fill="none"/>
                      <path id="Shape-2" data-name="Shape" d="M20,4V6A9,9,0,0,1,2,6V0H0V6A11,11,0,0,0,22,6V4Z" transform="translate(27 38)" fill="#183b56"/>
                      <path id="Shape-3" data-name="Shape" d="M6,12A6,6,0,1,0,0,6,6,6,0,0,0,6,12Z" transform="translate(42 32)" fill="#183b56"/>
                      <path id="Shape-4" data-name="Shape" d="M4,8A4,4,0,1,1,8,4,4,4,0,0,1,4,8Z" transform="translate(44 34)" fill="#fff"/>
                      <circle id="Shape-5" data-name="Shape" cx="2" cy="2" r="2" transform="translate(46 36)" fill="#ffc200"/>
                      <path id="Shape-6" data-name="Shape" d="M19.323,5H17.436a1,1,0,0,1-1-1V1a1,1,0,0,1,1-1H21.88a3,3,0,0,1,2.912,3.721l-4.955,20A3,3,0,0,1,16.925,26h-8.9a3,3,0,0,1-2.91-2.269l-5.023-20A3,3,0,0,1,3,0H7.436a1,1,0,0,1,1,1V4a1,1,0,0,1-1,1H5.55L9.232,21H15.64Z" transform="translate(15.564 13)" fill="#183b56"/>
                      <path id="Shape-7" data-name="Shape" d="M4.436,0H1A1,1,0,0,0,.03,1.244l5.023,20a1,1,0,0,0,.97.756h8.9a1,1,0,0,0,.971-.76l4.955-20A1,1,0,0,0,19.88,0H16.436V1h2.143a1,1,0,0,1,.975,1.224l-4.143,18a1,1,0,0,1-.975.776h-8a1,1,0,0,1-.975-.776l-4.143-18A1,1,0,0,1,2.293,1H4.436Z" transform="translate(17.564 15)" fill="#36b37e"/>
                      <path id="Shape-8" data-name="Shape" d="M0,1A1,1,0,0,1,1,0H5A1,1,0,0,1,6,1V4A1,1,0,0,1,5,5H1A1,1,0,0,1,0,4Z" transform="translate(25 37)" fill="#183b56"/>
                      <path id="Shape-9" data-name="Shape" d="M0,0V1H2V0Z" transform="translate(27 39)" fill="#fff"/>
                    </g>
                  </svg>
                  <h3 className='pt-5 text-base text-primary-text font-semibold'>Health</h3>
                </div>
              </div>

              <div className='group cursor-pointer'>
                <div className='grid justify-items-center px-5 py-5 rounded-lg border-2 bg-accent-3 group-hover:border-none hover:drop-shadow-2xl group-hover:bg-white'>
                  <svg id="iconspace_Apps" xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64">
                    <circle id="Oval" cx="32" cy="32" r="32" fill="none"/>
                    <path id="Shape" d="M3,0H13a3,3,0,0,1,3,3V13a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" transform="translate(13 14)" fill="#183b56"/>
                    <path id="Shape-2" data-name="Shape" d="M1,0A1,1,0,0,0,0,1V11a1,1,0,0,0,1,1H11a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Z" transform="translate(15 16)" fill="#ffc200"/>
                    <path id="Shape-3" data-name="Shape" d="M3,0H13a3,3,0,0,1,3,3V13a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" transform="translate(35 14)" fill="#183b56"/>
                    <path id="Shape-4" data-name="Shape" d="M1,0A1,1,0,0,0,0,1V11a1,1,0,0,0,1,1H11a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Z" transform="translate(37 16)" fill="#fff"/>
                    <path id="Shape-5" data-name="Shape" d="M3,0H13a3,3,0,0,1,3,3V13a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" transform="translate(13 35)" fill="#183b56"/>
                    <path id="Shape-6" data-name="Shape" d="M1,0A1,1,0,0,0,0,1V11a1,1,0,0,0,1,1H11a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Z" transform="translate(15 37)" fill="#fff"/>
                    <path id="Shape-7" data-name="Shape" d="M3,0H13a3,3,0,0,1,3,3V13a3,3,0,0,1-3,3H3a3,3,0,0,1-3-3V3A3,3,0,0,1,3,0Z" transform="translate(35 35)" fill="#183b56"/>
                    <path id="Shape-8" data-name="Shape" d="M1,0A1,1,0,0,0,0,1V11a1,1,0,0,0,1,1H11a1,1,0,0,0,1-1V1a1,1,0,0,0-1-1Z" transform="translate(37 37)" fill="#36b37e"/>
                  </svg>
                  <h3 className='pt-5 text-base text-primary-text font-semibold'>More</h3>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Categories
