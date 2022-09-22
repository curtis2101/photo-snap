import React from 'react'
import Desert from '../assets/shared/mobile/bg-beta.jpg'
import Desert2 from '../assets/shared/tablet/bg-beta.jpg'
import Desert3 from '../assets/shared/desktop/bg-beta.jpg'
import {BsArrowRight} from 'react-icons/bs'

const Beta = () => {
    return (  
        <>
        <div style={{backgroundImage: `url(${Desert})`}} className='md:hidden pl-8 md:pl-10 pr-8 md:pr-10 flex flex-col md:justify-between md:flex-row text-white pt-16 pb-16 col-start-1 col-end-9 bg-no-repeat bg-cover bg-center'>
            <h2 className='text-4xl font-bold uppercase pb-6 md:w-5/12 '>We’re in beta. Get your invite today!</h2>
            <button className='text-xs font-bold flex items-center hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
        </div>
        <div style={{backgroundImage: `url(${Desert2})`}} className='hidden lg:hidden pl-8 md:pl-10 pr-8 md:pr-10 md:flex flex-col md:justify-between md:flex-row text-white pt-16 pb-16 col-start-1 col-end-9 bg-no-repeat bg-cover bg-center'>
            <h2 className='text-4xl font-bold uppercase pb-6 md:w-5/12 '>We’re in beta. Get your invite today!</h2>
            <button className='text-xs font-bold flex items-center hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
        </div>
        <div style={{backgroundImage: `url(${Desert3})`}} className='hidden pl-8 md:pl-10 lg:pl-40 lg:pr-40 pr-8 md:pr-10 lg:flex flex-col md:justify-between md:flex-row text-white pt-16 pb-16 col-start-1 col-end-9 bg-no-repeat bg-cover bg-center'>
            <h2 className='text-4xl font-bold uppercase pb-6 md:w-5/12 lg:w-2/12 '>We’re in beta. Get your invite today!</h2>
            <button className='text-xs font-bold flex items-center hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
        </div>
        </>
    );
}

export default Beta;