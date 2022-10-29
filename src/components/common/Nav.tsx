import Link from 'next/link'
import React, { FC, useContext } from 'react';
import { userContext, UserContextProps } from '../context/UserContext';
import Image from 'next/image';

export const Nav : FC = () => {
  const { userName, setUsername, userDetail } = useContext<UserContextProps>(userContext);
  return (
    <div>
      <nav className="w-full flex gap-5 p-6 items-center text-2xl text-white">
        <Link href="/">
          <Image
            src="/images/s.png"
            alt="/images/s.png"
            width={170}
            height={33}
          />
        </Link>
        {/*/ --5px-- */}
        <Link href="/">
            Home
        </Link>
        {/*/ --5px-- */}
        <Link href="/galaxy">
          Galaxy
        </Link> 
        <div className="flex grow justify-end text-xs">
          {userName && <span> User: {userName} &nbsp; </span> }
          {!userName && <span> No se ha iniciado sesión &nbsp;</span>}
          <span>{ userDetail.status.enabled }</span>
          <span>{ userDetail.email} &nbsp; | &nbsp; </span>
          <button className="border shadow" onClick={() => {setUsername('Alexis Garcia')}}>log in</button>
        </div>
      </nav>     
    </div>
  )
}