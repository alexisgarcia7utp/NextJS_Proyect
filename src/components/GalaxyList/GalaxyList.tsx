import React, { useEffect, useState } from 'react'
import Galaxy from './Galaxy/Galaxy';

export interface IGalaxy {
  id: number,
  "Nombre": string,
  "Dimensiones": string,
  "Peso": string,
  "Tamaño Pantalla": string,
  "Pixeles Pantalla": string,
  "Procesador": string,
  "RAM": string,
  "Almacenamiento": string,
  "Expansion": string,
  "Camara": string,
  "Batería": string,
  "Precio Inicial": string,
  "Anunciado": string,
  "Poster": string
}

/*const useGalaxy = () => {
  const [galaxy, setGalaxy]=useState<IGalaxy[]>([])
  return galaxys
}*/

interface Props {
  galaxys: IGalaxy[];
};

export const GalaxyList = ({galaxys}: Props) => {
  return (
    <div className="flex flex-col justify-center text-black bg-white items-center p-6">
      <ul className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
        {galaxys.map((galaxy) =>(
          <Galaxy key={galaxy.id} galaxy={galaxy} />
        ))}
      </ul>
    </div>
  )
}
