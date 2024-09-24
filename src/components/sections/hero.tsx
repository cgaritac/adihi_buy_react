import React from 'react';

interface HeroProps {
    children: React.ReactNode;
    heroImage: string;
}

export const Hero = ({children, heroImage}: HeroProps) => {
    return (
        <>
            <div className={`w-full px-36 ${heroImage}`}>
                <div className='bg-black/45'>
                    <h1 className='flex justify-center items-center h-[300px] text-white text-9xl font-trade-winds shadow-2xl'>
                        {children}
                    </h1>
                </div>      
            </div>                  
        </>
    )
}