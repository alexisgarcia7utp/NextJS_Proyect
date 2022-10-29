import Link from 'next/link'
import React, { FC } from 'react'

export const Nav : FC = () => {
  return (
    <div>
      <nav className="w-full flex gap-5 p-6 items-center text-2xl text-white">
        <Link href="/">
            Home
        </Link>
        {/*/ --5px-- */}
        <Link href="/galaxy">
          Galaxy
        </Link>  
      </nav>     
    </div>
  )
}
