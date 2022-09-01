import React from 'react'
import Header from '../components/navbar.js'
import Pic from '../assets/home/mobile/create-and-share.jpg'
import {BsArrowRight} from 'react-icons/bs'
import Laptop from '../assets/home/mobile/beautiful-stories.jpg'
import Man from '../assets/home/mobile/designed-for-everyone.jpg'
import Mountains from '../assets/stories/mobile/mountains.jpg'
import City from '../assets/stories/mobile/cityscapes.jpg'
import Voyage from '../assets/stories/mobile/18-days-voyage.jpg'
import Architec from '../assets/stories/mobile/architecturals.jpg'



const Home = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-4 auto-rows-min'>
                <img src={Pic} alt='a man' className='h-72 w-full col-start-1 col-end-5 row-start-1 row-end-2'/>
                <section className='bg-black flex flex-col pl-8 pt-16 col-start-1 col-end-5'>
                    <h1 className='text-white text-3xl items-start font-bold pb-4 w-9/12'>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p className='text-white text-base font-light pb-6'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <button className='text-white text-xs font-bold flex items-center pb-16'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <img src={Laptop} alt='a laptop' className="h-72 w-full col-start-1 col-end-5"/>
                <section className='bg-white flex flex-col pl-8 pt-16 col-start-1 col-end-5'>
                    <h1 className='text-black text-3xl items-start font-bold pb-4 w-8/12'>BEAUTIFUL STORIES EVERY TIME</h1>
                    <p className='text-black text-base font-light pb-6'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <button className='text-black text-xs font-bold flex items-center pb-16'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <img src={Man} alt="man with camera" className='h-72 w-full col-start-1 col-end-5'/>
                <section className='bg-white flex flex-col pl-8 pt-16 col-start-1 col-end-5'>
                    <h1 className='text-black text-3xl items-start font-bold pb-4 w-8/12'>DESIGNED FOR EVERYONE</h1>
                    <p className='text-black text-base font-light pb-6'>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                    <button className='text-black text-xs font-bold flex items-center pb-16'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Mountains})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-5 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Mountains</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by John Appleseed</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${City})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-5 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>Sunset Cityscapes</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Benjamin Cruz</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Voyage})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-5 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>18 Days Voyage</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Alexei Borodin</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Architec})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-5 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>Architecturals</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Samantha Brooke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
            </div>
        </main>
    );
}

export default Home;