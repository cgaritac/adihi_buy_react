import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Hero } from '../components/sections/hero';

export const Calendar = () => {
    return (
        <>
            <Hero
                heroImage = "bg-calendar-hero"
            >
                Calendario
            </Hero>
            <h1 className="flex justify-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className='text-[400px] m-16'/>
            </h1>
            <p className="text-6xl flex justify-center">Calendario ... En construcción!</p>
        </>
    )
}