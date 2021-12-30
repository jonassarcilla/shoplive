import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Header = () => {
    return (
        <header className='bg-primary-3'>
          <div className='container mx-auto flex flex-row flex-wrap gap-x-2 items-center px-5 py-5'>
            <h1 className="font-bold text-2xl flex-auto">
            <Link href="/">
              <a className="flex flex-row flex-wrap gap-x-2 items-center text-accent">
                  <Image
                    src="/assets/img/ehya_logo.svg"
                    alt="Shoplive"
                    width={77}
                    height={24}
                  />
                  <span className='hidden'>Ehya</span>
              </a>
            </Link>
            </h1>
            <div>
              <Link href="/">
                <a className="flex flex-row flex-wrap gap-x-2 items-center text-accent">
                  <Image
                    src="/assets/img/ehya_burger_menu.svg"
                    alt="Shoplive"
                    width={24}
                    height={24}
                  />
                </a>
              </Link>
            </div>
          </div>
        </header>
    )
}

export default Header
