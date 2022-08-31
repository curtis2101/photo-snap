import React from 'react'
import Header from '../components/navbar.js'
import Pic from '../assets/home/mobile/create-and-share.jpg'
import {BsArrowRight} from 'react-icons/bs'
import Laptop from '../assets/home/mobile/beautiful-stories.jpg'


const Home = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-4 auto-rows-min'>
                <img src={Pic} alt='a man' className='h-72 w-full col-start-1 col-end-5 row-start-1 row-end-2'/>
                <section className='bg-black flex flex-col pl-8 pt-16 col-start-1 col-end-5'>
                    <h1 className='text-white text-3xl items-start font-bold pb-4 w-9/12'>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p className='text-white text-base font-normal pb-6'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <button className='text-white text-xs font-bold flex items-center pb-16'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <img src={Laptop} alt='a laptop' className="h-72 w-full col-start-1 col-end-5"/>
            </div>
        </main>
    );
}

export default Home;