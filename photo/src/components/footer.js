import React from 'react'
import Logo from '../assets/shared/desktop/logoWhite.svg'
import Facebook from '../assets/shared/desktop/facebook.svg'
import Youtube from '../assets/shared/desktop/youtube.svg'
import Twitter from '../assets/shared/desktop/twitter.svg'
import Pinterest from '../assets/shared/desktop/pinterest.svg'
import Instagram from '../assets/shared/desktop/instagram.svg'
import {BsArrowRight} from 'react-icons/bs'

const Footer = () => {
    return ( 
        <div className='col-start-1 col-end-9'>
            <div className='grid grid-cols-6 lg:pl-44 lg:pr-44 auto-rows-min bg-black'>
                <img className='pt-14 mb-8 col-start-3 col-end-5 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:pl-12' src={Logo} alt='logo'/>
                <div className='col-start-2 col-end-6 md:col-start-1 md:col-end-3 lg:col-end-2 md:pt-16 flex gap-3 md:justify-start md:pl-12 justify-center pb-12 md:pb-16'>
                    <img className='w-5 h-5' src={Facebook} alt='icon'/>
                    <img className='w-5 h-5' src={Youtube} alt='icon'/>
                    <img className='w-5 h-5' src={Twitter} alt='icon'/>
                    <img className='w-5 h-5' src={Pinterest} alt='icon'/>
                    <img className='w-5 h-5' src={Instagram} alt='icon'/>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col justify-center md:justify-start col-start-3 col-end-4 md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-3 md:row-start-2 md:gap-6 lg:gap-5 lg:row-start-1 lg:row-end-5 lg:pt-14 pl-10 md:pl-12 lg:pl-10'>
                    <h2 className="text-xs md:text-sm text-white font-bold">HOME</h2>
                    <h2 className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5 ">FEATURES</h2>
                    <h2 className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5">STORIES</h2>
                    <h2 className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5">PRICING</h2>
                </div>
                <button className='md:col-start-5 md:pr-10 md:pt-14 md:row-start-1 md:row-end-2 col-start-2 col-end-7 text-white text-xs md:text-sm font-bold flex items-center md:justify-end justify-center pt-28 pb-8'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                <p className='col-start-1 col-end-7 md:col-start-4 md:pr-10 md:pt-16 flex md:justify-end justify-center text-base text-opacity-50 font-normal text-white pb-14'>Copyright 2019.All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;