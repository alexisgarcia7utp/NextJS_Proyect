import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import { IGalaxy } from '../../components/GalaxyList/GalaxyList';
import { ApplicationWrappers } from '../../components/layout/ApplicationWrappers';
import Image from 'next/image';

interface TProps {
    galaxy: IGalaxy;
}
const GalaxyDetailPage: NextPage<TProps> = ({galaxy}) => {
    return (
        <ApplicationWrappers title={galaxy.Nombre}>
            <h1 className="grow flex flex-col bg-white text-black justify-center items-center">
                <div className="flex flex-col justify-center items-center m-10" >
                    <Image
                    src={galaxy.Poster}
                    alt={`Poster`}
                    width={139}
                    height={184}
                    /> <br/>
                    <a className= "font-bold">{galaxy.Nombre}</a>
                    <a> <a className= "font-bold"> Dimenciones:</a> {galaxy.Dimensiones} </a>
                    <a> <a className= "font-bold"> Peso:</a> {galaxy.Peso} </a>
                    <a> <a className= "font-bold"> Tamaño de Pantalla:</a> {galaxy['Tamaño Pantalla']} </a>
                    <a> <a className= "font-bold"> Pixeles en Pantalla:</a> {galaxy['Pixeles Pantalla']} </a>
                    <a> <a className= "font-bold"> Procesador:</a> {galaxy.Procesador} </a>
                    <a> <a className= "font-bold"> RAM:</a> {galaxy.RAM} </a>
                    <a> <a className= "font-bold"> Almacenamiento:</a> {galaxy.Almacenamiento} </a>
                    <a> <a className= "font-bold"> Expansión:</a> {galaxy.Expansion} </a>
                    <a> <a className= "font-bold"> Cámara:</a> {galaxy.Camara} </a>
                    <a> <a className= "font-bold"> Batería:</a> {galaxy.Batería} </a>
                    <a> <a className= "font-bold"> Precio Inicial:</a> {galaxy['Precio Inicial']} </a>
                    <a> <a className= "font-bold"> Anunciado:</a> {galaxy.Anunciado} </a>
                </div>
            </h1>
        </ApplicationWrappers>
    )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
    const res = await fetch(
        process.env.NEXT_PUBLIC_API_URL + "/galaxy/" 
        + context.params?.id);
    const galaxy = await res.json();
    return {
        props: {
            galaxy,
        }
    };
};

export default GalaxyDetailPage;
