import React from 'react'
import Logo from '../assets/shared/desktop/logoWhite.svg'
import Facebook from '../assets/shared/desktop/facebook.svg'
import Youtube from '../assets/shared/desktop/youtube.svg'
import Twitter from '../assets/shared/desktop/twitter.svg'
import Pinterest from '../assets/shared/desktop/pinterest.svg'
import Instagram from '../assets/shared/desktop/instagram.svg'
import {BsArrowRight} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'

const Footer = () => {
    const navigate =useNavigate();
    const featuresPage = () => {
        navigate('/features');
    }
    const storiesPage = () => {
        navigate('/stories');
    }
    const home = () => {
        navigate('/');
    }
    const price = () => {
        navigate('/price');
    }
    
    
    return ( 
        <div className='col-start-1 col-end-9'>
            <div className='grid grid-cols-6 lg:pl-32 lg:pr-32 auto-rows-min bg-black'>
                <img onClick={home} className='pt-14 mb-8 col-start-3 col-end-5 md:col-start-1 md:col-end-3 md:row-start-1 md:row-end-2 md:pl-12 cursor-pointer' src={Logo} alt='logo'/>
                <div className='col-start-2 col-end-6 md:col-start-1 md:col-end-3 lg:col-end-2 md:pt-16 flex gap-3 md:justify-start md:pl-12 justify-center pb-12 md:pb-16'>
                    <a href='https://www.facebook.com' target='_blank'><img className='w-5 h-5 cursor-pointer hover:opacity-30 hover:animate-bounce' src={Facebook} alt='icon'/></a>
                    <a href='https://www.youtube.com' target='_blank'><img className='w-5 h-5 cursor-pointer hover:opacity-30 hover:animate-bounce' src={Youtube} alt='icon'/></a>
                    <a href='https://www.twitter.com' target='_blank'><img className='w-5 h-5 cursor-pointer hover:opacity-30 hover:animate-bounce' src={Twitter} alt='icon'/></a>
                    <a href='https://www.pinterest.com' target='_blank'><img className='w-5 h-5 cursor-pointer hover:opacity-30 hover:animate-bounce' src={Pinterest} alt='icon'/></a>
                    <a href='https://www.instagram.com' target='_blank'><img className='w-5 h-5 cursor-pointer hover:opacity-30 hover:animate-bounce' src={Instagram} alt='icon'/></a>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col justify-center md:justify-start col-start-3 col-end-4 md:col-start-1 md:col-end-4 lg:col-start-2 lg:col-end-3 md:row-start-2 md:gap-6 lg:gap-5 lg:row-start-1 lg:row-end-5 lg:pt-14 pl-10 md:pl-12 lg:pl-32'>
                    <h2 onClick={home} className="text-xs md:text-sm text-white font-bold cursor-pointer hover:opacity-30">HOME</h2>
                    <h2 onClick={storiesPage} className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5 cursor-pointer hover:opacity-30">STORIES</h2>
                    <h2 onClick={featuresPage} className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5 cursor-pointer hover:opacity-30">FEATURES</h2>
                    <h2 onClick={price} className="text-xs md:text-sm text-white font-bold md:pt-0 pt-5 cursor-pointer hover:opacity-30">PRICING</h2>
                </div>
                <button className='hover:underline md:col-start-5 md:pr-10 md:pt-14 md:row-start-1 md:row-end-2 col-start-2 col-end-7 text-white text-xs md:text-sm font-bold flex items-center md:justify-end justify-center pt-28 pb-8'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                <p className='col-start-1 col-end-7 md:col-start-4 md:pr-10 md:pt-16 flex md:justify-end justify-center text-base text-opacity-50 font-normal text-white pb-14'>Copyright 2019.All Rights Reserved</p>
            </div>
        </div>
    );
}

export default Footer;