import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hero } from '../components/sections/hero';

export const Catalog = () => {
    return (
        <>
            <Hero
                heroImage = "bg-catalog-hero"
            >
                Catálogo
            </Hero>
            <h1 className="flex justify-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className='text-[400px] m-16'/>
            </h1> 
            <p className="text-6xl flex justify-center">Catálogos ... En construcción!</p>
        </>
    )
}