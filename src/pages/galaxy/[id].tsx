import { GetServerSideProps, NextPage } from 'next';
import React from 'react'
import { IGalaxy } from '../../components/GalaxyList/GalaxyList';
import { ApplicationWrappers } from '../../components/layout/ApplicationWrappers';

interface TProps {
    galaxy: IGalaxy;
}
const GalaxyDetailPage: NextPage<TProps> = ({galaxy}) => {
    return (
        <ApplicationWrappers title=''>
            <h1> {galaxy.Nombre}</h1>
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
