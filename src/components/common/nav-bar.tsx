import { PagesList } from '../../utils/enums/list-pages';
import { NavLink } from 'react-router-dom';

export const NavBar = () => {
    return (
        <>
            <ul className='flex justify-between items-center h-12 text-white font-normal xl:text-2xl lg:text-xl' >
                <li className="">
                    <NavLink
                        to="/"
                        end
                        className={({ isActive }) =>
                            `relative px-4 py-2 pb- hover:text-black ${isActive ? 'bg-red-500 rounded-full' : ''}`
                        }
                    >
                        {PagesList.home}
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/category/"
                        className={({ isActive }) =>
                            `relative px-4 py-2 pb- hover:text-black ${isActive ? 'bg-red-500 rounded-full' : ''}`
                        }
                    >
                        {PagesList.category}
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/calendar"
                        className={({ isActive }) =>
                            `relative px-4 py-2 pb- hover:text-black ${isActive ? 'bg-red-500 rounded-full' : ''}`
                        }
                    >
                        {PagesList.calendar}
                    </NavLink>
                </li>
                <li className="">
                    <NavLink
                        to="/contact"
                        className={({ isActive }) =>
                            `relative px-4 py-2 pb- hover:text-black ${isActive ? 'bg-red-500 rounded-full' : ''}`
                        }
                    >
                        {PagesList.contact}
                    </NavLink>
                </li>
            </ul>
        </>
    )
}