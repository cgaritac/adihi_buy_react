import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hero } from '../components/sections/hero';

export const Terms = () => {
    return (
        <>
            <Hero
                heroImage = "bg-terms-hero"
            >
                Términos y condiciones
            </Hero>
            <h1 className="flex justify-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className='text-[400px] m-16'/>
            </h1>
            <p className="text-6xl flex justify-center">Términos y Condiciones ... En construcción!</p>
        </>
    )
}