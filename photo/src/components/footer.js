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
        <div className='col-start-1 col-end-7'>
            <div className='flex flex-col items-center bg-black'>
                <img className='pt-14 w-44 mb-8' src={Logo} alt='logo'/>
                <div className='flex gap-3 justify-items-center pb-12'>
                    <img className='w-5 h-5' src={Facebook} alt='icon'/>
                    <img className='w-5 h-5' src={Youtube} alt='icon'/>
                    <img className='w-5 h-5' src={Twitter} alt='icon'/>
                    <img className='w-5 h-5' src={Pinterest} alt='icon'/>
                    <img className='w-5 h-5' src={Instagram} alt='icon'/>
                </div>
                <h2 className="text-xs text-white font-bold">HOME</h2>
                <h2 className="text-xs text-white font-bold pt-5">FEATURES</h2>
                <h2 className="text-xs text-white font-bold pt-5">STORIES</h2>
                <h2 className="text-xs text-white font-bold pt-5">PRICING</h2>
                <button className='text-white text-xs font-bold flex items-center pt-28 pb-8'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                <p className='text-base text-opacity-50 font-normal text-white pb-14'>Copyright 2019.All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;