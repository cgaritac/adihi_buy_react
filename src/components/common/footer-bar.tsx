import { PagesList } from '../../utils/enums/list-pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from 'react-router-dom';

export const FooterBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center text-white">
                <section className="flex flex-col items-center">
                    <ul className='flex justify-between items-center mt-2 gap-x-4 mb-2'>
                        <li>
                            <a href="https://www.facebook.com/adihi.costarica" target="_blank" className='hover:text-adihi-red'>
                                <FontAwesomeIcon icon={faFacebook} className="text-white text-3xl px-1"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/adihicostarica/" target="_blank" className='hover:text-adihi-red'>
                                <FontAwesomeIcon icon={faInstagram} className="text-white text-3xl px-1"/>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.tiktok.com/@adihicr?_t=8mb7KRCHPPy&_r=1" target="_blank" className='hover:text-adihi-red'>
                                <FontAwesomeIcon icon={faTiktok} className="text-white text-3xl px-1"/>
                            </a>
                        </li>
                    </ul>
                </section>                
                <section aria-labelledby='Pages-links' className='flex flex-col items-center'>
                    <h3 id='Pages-links' className="text-2xl font-normal mb-3 mt-5 font-semibold font-trade-winds">Enlaces:</h3>
                    <ul className='flex font-trade-winds'>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.home}
                            </NavLink>                       
                            <span className='pl-2'>|</span>
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/catalog"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.catalog}
                            </NavLink>                       
                            <span className='pl-2'>|</span>                      
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/calendar"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.calendar}
                            </NavLink>           
                            <span className='pl-2'>|</span>               
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/contact"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.contact}
                            </NavLink> 
                            <span className='pl-2'>|</span>                      
                        </li>
                        <li className='pl-2 mb-5'>
                            <NavLink
                                to="/terms"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.terms}
                            </NavLink> 
                        </li>
                    </ul>
                </section>
            </nav>
        </>
    )
}