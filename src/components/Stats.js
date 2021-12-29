import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Stats = () => {
    return (
        <section className='relative container mx-auto flex flex-col overflow-x-auto bg-white'>
            <div className='grid justify-items-center'>
              <div className='flex flex-row px-4 py-3 gap-4'>
                <div className='flex flex-col w-72'>
                  <h3 className='mb-5 text-xl text-primary-text font-semibold'>Most Sold Laptops</h3>
                  
                  <div className='flex flex-col gap-4'>
                    {/* item wrapper */}
                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row items-center justify-items-center content-center px-5 py-5'>
                    <p className='flex-auto text-secondary font-bold'>Leaderboard details</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7.246" height="11.941" viewBox="0 0 7.246 11.941">
                        <path id="chevron-right" d="M1.74,11.748,7.054,6.434a.656.656,0,0,0,0-.928L1.74.192a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L4.4,5.97.191,10.2a.656.656,0,0,0,0,.927l.62.62A.656.656,0,0,0,1.74,11.748Z" fill="#36b37e"/>
                      </svg>
                    </span>
                  </div>
                </div>

                <div className='flex flex-col w-72'>
                  <h3 className='mb-5 text-xl text-primary-text font-semibold'>Most Sold Laptops</h3>
                  
                  <div className='flex flex-col gap-4'>
                    {/* item wrapper */}
                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row items-center justify-items-center content-center px-5 py-5'>
                    <p className='flex-auto text-secondary font-bold'>Leaderboard details</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7.246" height="11.941" viewBox="0 0 7.246 11.941">
                        <path id="chevron-right" d="M1.74,11.748,7.054,6.434a.656.656,0,0,0,0-.928L1.74.192a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L4.4,5.97.191,10.2a.656.656,0,0,0,0,.927l.62.62A.656.656,0,0,0,1.74,11.748Z" fill="#36b37e"/>
                      </svg>
                    </span>
                  </div>
                </div>
                <div className='flex flex-col w-72'>
                  <h3 className='mb-5 text-xl text-primary-text font-semibold'>Most Sold Laptops</h3>
                  
                  <div className='flex flex-col gap-4'>
                    {/* item wrapper */}
                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>

                    <div className='px-5 pt-4 pb-5 rounded-lg bg-primary-3'>
                      <div className='grid justify-items-start'>
                        <div className=' w-16 h-16 rounded-lg bg-red-500'></div>
                      </div>
                      <h4 className='mt-4 font-semibold'>Asus Zenbook Pro 13&quot;</h4>
                      <div className='flex flex-row'>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg xmlns="http://www.w3.org/2000/svg" width="14.629" height="14.002" viewBox="0 0 14.629 14.002">
                            <path id="star" d="M3.741,13.9l3.574-1.879L10.888,13.9a.875.875,0,0,0,1.269-.921L11.473,9l2.89-2.816A.875.875,0,0,0,13.88,4.69L9.885,4.107,8.1.487a.876.876,0,0,0-1.57,0L4.744,4.107.749,4.69A.875.875,0,0,0,.265,6.183L3.155,9l-.684,3.979A.874.874,0,0,0,3.741,13.9Z" transform="translate(0)" fill="#ffc200"/>
                          </svg>
                          <span className='text-sm text-primary-text'>4.8</span>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center mx-3'>
                          <svg id="Elements_Shape_Fill_99_R" data-name="Elements/Shape/Fill/99 R" xmlns="http://www.w3.org/2000/svg" width="4" height="4" viewBox="0 0 4 4">
                            <rect id="Shadow" width="4" height="4" rx="2" fill="none"/>
                            <rect id="Fill" width="4" height="4" rx="2" fill="#b3bac5"/>
                          </svg>
                        </div>
                        <div className='flex flex-row items-center justify-items-center content-center gap-1'>
                          <svg id="iconspace_Stroller_25px" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
                            <path id="path" d="M0,0H18V18H0Z" fill="none"/>
                            <path id="path-2" data-name="path" d="M11.485,14.58a1.621,1.621,0,0,1-1.526-2.159H7.976a1.618,1.618,0,1,1-2.754-.516A2.7,2.7,0,0,1,4.126,10l-.008-.081A2.535,2.535,0,0,1,2.5,7.783L2.287,5.3a.44.44,0,0,1-.008-.048L2.046,2.97l-.13-1.083a.9.9,0,0,0-.895-.807H.54A.54.54,0,0,1,.54,0h.482A1.974,1.974,0,0,1,2.99,1.777l.1.961H14.04a.359.359,0,0,1,.353.429l-.957,4.881a2.522,2.522,0,0,1-2.47,2.034H5.231a1.63,1.63,0,0,0,1.579,1.259h4.517a.191.191,0,0,1,.043,0H11.4l.087,0a1.619,1.619,0,0,1,0,3.238Zm0-2.339a.72.72,0,1,0,.72.72A.72.72,0,0,0,11.485,12.241Zm-5.036,0a.72.72,0,1,0,.72.72A.72.72,0,0,0,6.449,12.241Z" transform="translate(2.16 1.44)" fill="#5a7184"/>
                          </svg>
                          <span className='text-sm text-secondary-text'>2,1k Unit Sold</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-row items-center justify-items-center content-center px-5 py-5'>
                    <p className='flex-auto text-secondary font-bold'>Leaderboard details</p>
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="7.246" height="11.941" viewBox="0 0 7.246 11.941">
                        <path id="chevron-right" d="M1.74,11.748,7.054,6.434a.656.656,0,0,0,0-.928L1.74.192a.656.656,0,0,0-.928,0l-.62.62a.656.656,0,0,0,0,.927L4.4,5.97.191,10.2a.656.656,0,0,0,0,.927l.62.62A.656.656,0,0,0,1.74,11.748Z" fill="#36b37e"/>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </section>
    )
}

export default Stats
