import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { HiHome } from 'react-icons/hi';
import { IoAirplaneSharp } from 'react-icons/io5';
import { GiForestCamp } from 'react-icons/gi';
import { MdWater } from 'react-icons/md';
import { TiWeatherPartlySunny } from 'react-icons/ti';

const Navbar = () => {
    const router = useRouter();

    return (
        <nav className={`absolute z-10 
            ${router.pathname === '/' 
                ? 'bottom-[15%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:bottom-24 lg:right-0 lg:left-[65%] lg:transform-none text-white' 
                : 'top-[4%] left-1/2 transform -translate-x-1/2 lg:top-12 lg:left-[78%] mt-3 lg:mt-0'} 
            ${router.pathname.includes('city') 
                ? 'hidden' 
                : ''}`}
        >
            <ul className="icons flex space-x-7 md:space-x-16 lg:space-x-11">
                <li className="scale-[2] hover:scale-[2.6] ease-in duration-200">
                    <Link href="/">
                        <a><HiHome className={`${router.pathname === '/' ? '' : 'fill-orange-600/90'}`} /></a>
                    </Link>
                </li>
                <li className="scale-[2] hover:scale-[2.6] ease-in duration-200">
                    <Link href="/arrival">
                        <a><IoAirplaneSharp className={`${router.pathname === '/' ? '' : 'fill-sky-500'}`} /></a>
                    </Link>
                </li>
                <li className="scale-[2] hover:scale-[2.6] ease-in duration-200">
                    <Link href="/national-parks">
                        <a><GiForestCamp className={`${router.pathname === '/' ? '' : 'fill-green-600'}`} /></a>
                    </Link>
                </li>
                <li className="scale-[2] hover:scale-[2.6] ease-in duration-200">
                    <Link href="/lakes">
                        <a><MdWater className={`${router.pathname === '/' ? '' : 'fill-blue-400'}`} /></a>
                    </Link>
                </li>
                <li className="scale-[2] hover:scale-[2.6] ease-in duration-200">
                    <Link href="/weather">
                        <a><TiWeatherPartlySunny className={`${router.pathname === '/' ? '' : 'fill-yellow-400'}`} /></a>
                    </Link>
                </li>
                <li className="scale-[1.8] hover:scale-[2.3] ease-in duration-200">
                    <a 
                        href="https://www.facebook.com/pages/Canada/107480665948163" 
                        target="_blank" 
                        rel="noreferrer">
                            <FaFacebookF className={`${router.pathname === '/' ? '' : 'fill-blue-600'}`} />
                    </a>
                </li>
                <li className="scale-[2] hover:scale-[2.3] ease-in duration-200">
                    <a 
                        href="https://www.instagram.com/parks.canada/" 
                        target="_blank" 
                        rel="noreferrer">
                            <FaInstagram className={`${router.pathname === '/' ? '' : 'fill-fuchsia-600'}`} />
                    </a>
                </li>
            </ul>                
        </nav>
    )
}

export default Navbar;
