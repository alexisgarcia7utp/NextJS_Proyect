import { NextPage } from 'next';
import Head from 'next/head'
import Image from 'next/image'
import { ApplicationWrappers } from '../components/layout/ApplicationWrappers';

type HomeProps = {
  response: string;
};

const Home: NextPage<HomeProps> = () => {
  return (
    <div className=''>
      <ApplicationWrappers 
      title="Home" 
      description="Home of the Samsung Galaxy Website">
        <div className="grow flex flex-col justify-center items-center bg-[url('/images/banner.png')]">
          <div className="grow bg-black w-full justify-center items-center flex bg-opacity-75">
            <h1 className="text-3xl font-bold underline">
                ¡Bienvenido a Samsung Galaxy!
            </h1>
          </div>
        </div>
      </ApplicationWrappers>
    </div>
  )
}

export default Home;