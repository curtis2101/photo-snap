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
import Speaker from '../assets/features/desktop/embed.svg'
import Figure8 from '../assets/features/desktop/no-limit.svg'
import Tablet from '../assets/features/desktop/responsive.svg'
import Footer from '../components/footer.js'



const Home = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-5 auto-rows-min'>
                <div style={{backgroundImage: `url(${Pic})`}} className='w-full h-72 md:h-full bg-no-repeat bg-cover bg-center col-start-1 col-end-6 md:col-start-4 md:col-end-6 row-start-1 row-end-2'></div>
                <section className='bg-black flex flex-col pl-8 pt-16 col-start-1 col-end-6 md:col-end-4'>
                    <h1 className='text-white text-3xl items-start font-bold pb-4 md:text-4xl md:w-8/12 md:pt-44 w-9/12'>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p className='text-white opacity-60 text-base font-normal pb-6 md:text-base md:w-10/12'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <button className='text-white text-xs font-bold flex items-center pb-16 md:pb-44'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Laptop})`}} className='w-full h-72 md:h-full bg-no-repeat bg-cover bg-center col-start-1 col-end-6 md:col-end-3'></div>
                <section className='bg-white flex flex-col pl-8 pt-16 col-start-1 col-end-6 md:col-start-3'>
                    <h1 className='text-black text-3xl items-start font-bold pb-4 w-8/12 md:pt-32 md:text-4xl md:w-3/6'>BEAUTIFUL STORIES EVERY TIME</h1>
                    <p className='text-black opacity-60 text-base font-normal pb-6 '>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <button className='text-black text-xs font-bold flex items-center pb-16 md:pb-32'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Man})`}} className='h-96 md:h-full bg-no-repeat bg-cover bg-center col-start-1 col-end-6 md:col-start-4 md:row-start-3'></div>
                <section className='bg-white flex flex-col pl-8 pt-16 col-start-1 col-end-6 md:col-end-4'>
                    <h1 className='text-black text-3xl items-start font-bold md:text-4xl pb-4 w-8/12 md:pt-40'>DESIGNED FOR EVERYONE</h1>
                    <p className='text-black text-base font-normal opacity-60 pb-6 '>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                    <button className='text-black text-xs font-bold flex items-center pb-16 md:pb-40'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Mountains})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-6 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Mountains</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by John Appleseed</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${City})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-6 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>Sunset Cityscapes</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Benjamin Cruz</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Voyage})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-6 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>18 Days Voyage</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Alexei Borodin</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Architec})`}} className='bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-6 h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white'>Architecturals</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Samantha Brooke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <section className='col-start-1 col-end-6'>
                    <div className='flex flex-col items-center mt-20'>
                        <img className='h-20 w-20' src={Tablet} alt='test'/>
                        <h2 className='mt-12 text-lg font-bold'>100% Responsive</h2>
                        <p className='text-center w-9/12 opacity-60 mt-4 text-sm font-light'>No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                        <img className='mt-14 w-18' src={Figure8} alt='figure8'/>
                        <h2 className='mt-16 text-lg font-bold'>No Photo Upload Limit</h2>
                        <p className='text-center w-9/12 opacity-60 mt-4 text-sm font-light'>Our tool has no limits on upload or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                        <img className='mt-14 w-18' src={Speaker} alt='figure8'/>
                        <h2 className='mt-16 text-lg font-bold'>Available to Embed</h2>
                        <p className='text-center w-9/12 opacity-60 mt-4 text-sm font-light pb-20'>Embed Tweets,Facebook posts,Instagram media,Vimeo or YouTube videos,Google Maps and more.</p>
                    </div>
                </section>
                <Footer/>
            </div>
        </main>
    );
}

export default Home;