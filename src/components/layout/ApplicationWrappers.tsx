import { NextPage } from 'next';
import Head from 'next/head'
import Link from 'next/link';
import React, { FC, PropsWithChildren } from 'react'
import { Nav } from '../common/Nav';

interface TProps {
    title: string;
    description?: string;
}

export const ApplicationWrappers: FC <PropsWithChildren <TProps>> = (
    {title, description, children}) => {
      const displayTitle = `${title} | Samsung Galaxy`
  return (
    <div className="bg-black min-h-screen flex flex-col">
        <Head>
            <title>{displayTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <header className="bg-black h-20">
            <Nav />
        </header>
        <main className='grow flex flex-col text-white'>
            {children}
        </main>
        <footer className='flex p-6 h-20 text-white bg-black items-center justify-center'>
          <a
            href="https://www.linkedin.com/in/alexis-antonio-garcia/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className=''>
              alexisgar09
            </span>
          </a>
        </footer>
    </div>
  )
}
