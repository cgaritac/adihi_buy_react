import { Hero } from '../components/sections/hero';
import { CardRight } from '../components/sections/card-right';
import { CardLeft } from '../components/sections/card-left';
import { Banner } from '../components/sections/banner.tsx';

export const Home = () => {
    return (
        <>
            <Hero
                heroImage = "bg-home-hero"
            >
                Adihi
            </Hero>
            <CardRight 
                headingCardRight="XXXXXXXXXXX" 
                imageUrlCardRight="https://placehold.co/700x350" 
                altTextCardRight = "XXXXXXXXX"
            />
            <Banner 
                headingBanner="XXXXXXXXXXX" 
                textBanner = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit amet laoreet lectus, tempus porttitor arcu. Duis ultrices facilisis arcu sed gravida. Vestibulum tempus hendrerit iaculis. Praesent eu est ex. Ut eleifend cursus ultrices. Vivamus vitae ligula in velit eleifend feugiat auctor non tellus."
            />
            <CardLeft 
                headingCardLeft="XXXXXXXXXXX" 
                imageUrlCardLeft="https://placehold.co/700x350" 
                altTextCardLeft = "XXXXXXXXX"
            />
        </>
    )
}