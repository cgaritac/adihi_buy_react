import React from 'react';

interface CardLeftProps {
    headingCardLeft: string;
    imageUrlCardLeft: string;
    altTextCardLeft?: string;
}

export const CardLeft: React.FC<CardLeftProps> = ({ headingCardLeft, imageUrlCardLeft, altTextCardLeft = "Image"}) => {
    return(
        <div className='flex h-[450px] mx-36'>            
            <div className='w-[50vw] flex justify-center items-center'>
                <img src={imageUrlCardLeft} alt={altTextCardLeft}/>
            </div>
            <section className='w-[50vw] flex justify-center items-center'>
                <h2 className='text-5xl font-trade-winds'>
                    {headingCardLeft}
                </h2>
            </section>
        </div>
    )
}