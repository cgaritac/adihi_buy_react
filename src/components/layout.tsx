import React from 'react';
import { HeaderBar } from '../components/common/header-bar';
import { NavBar } from '../components/common/nav-bar';
import { FooterBar } from '../components/common/footer-bar';
import { RightsBar } from '../components/common/Rights-bar';

export const MainLayout = ({ children }: {children: React.ReactNode}) => {

    return (
        <>
            <header className='w-full bg-black px-36'>
                <HeaderBar/>
            </header>
            <nav className='w-full bg-adihi-red px-36 sticky top-0 z-10 shadow-lg'>
                <NavBar/>
            </nav>
            <main className='bg-rose-100'>
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