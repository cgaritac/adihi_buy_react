
import { faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  

export const Cart = () => {
    return (
        <>
            <h1 className="flex justify-center">
                <FontAwesomeIcon icon={faScrewdriverWrench} className='text-[400px] m-16'/>
            </h1>
            <p className="text-6xl flex justify-center">Carrito de compras ... En construcción!</p>
        </>
    )
}