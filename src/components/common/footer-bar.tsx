import { PagesList } from '../../utils/enums/list-pages';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faTiktok, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { LogoComponent } from '../common/logo';
import { NavLink } from 'react-router-dom';

export const FooterBar = () => {
    return (
        <>
            <nav className="flex justify-between items-center text-white">
                <section aria-labelledby='Social-network-title' className="flex flex-col items-center">
                    <LogoComponent/>
                    <ul className='flex justify-between items-center pt-4 gap-x-4'>
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
                    <h3 id='Pages-links' className="text-2xl font-normal mb-3 mt-5 font-semibold">Enlaces:</h3>
                    <ul className='flex'>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.home}
                            </NavLink>                       
                            <span className='pl-2'>|</span>
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/category"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.category}
                            </NavLink>                       
                            <span className='pl-2'>|</span>                      
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/katanas"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.katana}
                            </NavLink>                    
                            <span className='pl-2'>|</span>                           
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/new"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.new}
                            </NavLink> 
                            <span className='pl-2'>|</span>                         
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/popular"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.popular}
                            </NavLink> 
                            <span className='pl-2'>|</span>                          
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/calendar"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.calendar}
                            </NavLink>           
                            <span className='pl-2'>|</span>               
                        </li>
                        <li className='pl-2 pb-1'>
                            <NavLink
                                to="/adihi_store_react/contact"
                                end
                                className="hover:text-adihi-red"                                
                            >
                                {PagesList.contact}
                            </NavLink> 
                            <span className='pl-2'>|</span>                      
                        </li>
                        <li className='pl-2 mb-5'>
                            <NavLink
                                to="/adihi_store_react/terms"
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