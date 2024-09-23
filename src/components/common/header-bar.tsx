import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useHoverSearch } from '../../hooks/use-hover-search';
import { LogoComponent } from '../common/logo';
import { NavLink } from 'react-router-dom';

export const HeaderBar = () => {
    const { isHovered, handleMouseEnter, handleMouseLeave } = useHoverSearch();

    return (
        <>
            <ul className='flex justify-between items-center h-36'>
                <li>
                    <LogoComponent/>                    
                </li>
                <li className='flex items-center'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <div className={'relative flex items-center'}>
                        <input 
                            type="text" 
                            placeholder='Buscar artículo'
                            className={`transition-transform duration-300 ease-in-out border-adihi-red border-2 rounded-full text-center text-2xl px-2 ${
                            isHovered ? 'opacity-100 translate-x-0 w-80' : 'opacity-0 translate-x-4 w-0'}`}
                            style={{transition: 'width 0.4s ease, opacity 0.3s ease'}}
                        />
                        <button 
                           className={`w-16 h-16 bg-adihi-red rounded-full flex items-center justify-center transition-transform duration-300 ease-in-out 
                           ${isHovered ? '-translate-x-10 rotate-90' : '-translate-x-20 rotate-0'}`}>
                            <FontAwesomeIcon icon={faSearch} className="text-xl text-white" />
                        </button>
                    </div>
                </li>
                <li>
                    <NavLink to="/login" className='relative'>
                        <div className='w-16 h-16 bg-adihi-red rounded-full flex items-center justify-center hover:bg-red-800'>
                            <FontAwesomeIcon icon={faUser} className="text-xl text-white" />
                        </div>
                    </NavLink>
                </li>
            </ul>
        </>
    )
}

