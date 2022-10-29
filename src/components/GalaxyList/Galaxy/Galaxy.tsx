import Link from 'next/link';
import React, { FC } from 'react'
import { IGalaxy } from '../GalaxyList';
import Image from 'next/image';

interface TProps {
    galaxy: IGalaxy;
}

const Galaxy: FC<TProps> = ({galaxy}) => {
  return (
    <div>
      <li key={galaxy.id}>
        <Link href={`/galaxy/${galaxy.id}`}>
            <div className="flex flex-col justify-center items-center cursor-pointer" >
                <Image
                  src={galaxy.Poster}
                  alt={`${galaxy.Nombre} Poster`}
                  width={139}
                  height={184}
                />
            </div>
        </Link>
        <strong>{galaxy.Nombre}</strong>
        </li>
    </div>
  )
}

export default Galaxy
