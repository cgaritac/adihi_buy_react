import React from 'react';

interface BannerProps {
    headingBanner: string;
    textBanner: string;
}

export const Banner: React.FC<BannerProps> = ({ headingBanner, textBanner}) => {
    return(
        <div className='flex h-[350px] bg-gradient-to-l from-adihi-red flex justify-center items-center'>                
            <section className='w-[60vw] h-[250px] flex flex-col justify-center items-center bg-black/20 p-12 rounded-2xl font-trade-winds border-4 border-dotted'>
                <h2 className='text-3xl font-semibold mb-3'>
                    {headingBanner}
                </h2>
                <p className='text-xl text-center'>
                    {textBanner}
                </p>
            </section>
        </div>
    )
}