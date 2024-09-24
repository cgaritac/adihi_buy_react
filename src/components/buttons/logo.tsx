import adihiLogo from '../../assets/adihiLogo.png'
import { NavLink } from 'react-router-dom';

export const LogoComponent = () => {
    return (
        <>
            <NavLink
                to="/"
                end
                className="hover:text-adihi-red"
            >
                <img src={adihiLogo} alt="Adihi Logo" className='max-w-32'/>
            </NavLink> 
        </>
    )
}