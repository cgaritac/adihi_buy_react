import React from 'react';
import { HeaderBar } from '../components/common/header-bar';
import { NavBar } from '../components/common/nav-bar';
import { Hero } from '../components/common/hero';
import { FooterBar } from '../components/common/footer-bar';
import { RightsBar } from '../components/common/Rights-bar';

export const MainLayout = ({ children }: {children: React.ReactNode}) => {

    return (
        <>
            <header className='w-full bg-black px-36'>
                <HeaderBar/>
            </header>
            <nav className='w-full bg-adihi-red px-36'>
                <NavBar/>
            </nav>
            <section className='w-full bg-home-hero bg px-36'>
                <Hero/>
            </section> 
            <main className='bg-red-200 px-36 pb-24'>
                {children}
            </main>           
            <footer className='w-full bg-black px-36'>
                <FooterBar/>
            </footer>
            <section aria-labelledby='Rights-title' className='w-full bg-adihi-red px-36'>
                <RightsBar/>
            </section>
        </>
    )
}