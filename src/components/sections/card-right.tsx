import React from 'react';

interface CardRightProps {
    headingCardRight: string;
    imageUrlCardRight: string;
    altTextCardRight?: string;
}

export const CardRight: React.FC<CardRightProps> = ({ headingCardRight, imageUrlCardRight, altTextCardRight = "Image"}) => {
    return(
        <div className='flex h-[450px] mx-36'>
            <section className='w-[50vw] flex justify-center items-center'>
                <h2 className='text-5xl font-trade-winds'>
                    {headingCardRight}
                </h2>
            </section>
            <div className='w-[50vw] flex justify-center items-center'>
                <img src={imageUrlCardRight} alt={altTextCardRight}/>
            </div>
        </div>
    )
}