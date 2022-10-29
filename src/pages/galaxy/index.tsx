import React, { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { GalaxyList, IGalaxy } from '../../components/GalaxyList/GalaxyList';
import { ApplicationWrappers } from '../../components/layout/ApplicationWrappers';

interface GalaxyProps {
  galaxys: IGalaxy[];
  response: string;
};

const Galaxy: NextPage<GalaxyProps> = ({galaxys}) => {
  return (
    <div className=''>
      <ApplicationWrappers
      title="Galaxy" 
      description="Galaxy of the Samsung Galaxy Website">
        <GalaxyList galaxys={galaxys}/>
      </ApplicationWrappers>
    </div>
  )
}

export default Galaxy;

export const getStaticProps: GetServerSideProps = async (context) => {
  const galaxys = await fetch(process.env.NEXT_PUBLIC_API_URL + "/galaxy")
    .then((res) => res.json())
    .then((data: IGalaxy[]) => (data))
    .catch((error) => console.error(error));
  return {
    props: {
      galaxys
    },
    revalidate: 10
  };
};