import React from 'react'
import Header from '../components/navbar.js'
import Pic from '../assets/home/desktop/create-and-share.jpg'
import {BsArrowRight} from 'react-icons/bs'
import Laptop from '../assets/home/desktop/beautiful-stories.jpg'
import Man from '../assets/home/desktop/designed-for-everyone.jpg'
import Mountains from '../assets/stories/desktop/mountains.jpg'
import City from '../assets/stories/desktop/cityscapes.jpg'
import Voyage from '../assets/stories/desktop/18-days-voyage.jpg'
import Architec from '../assets/stories/desktop/architecturals.jpg'
import Speaker from '../assets/features/desktop/embed.svg'
import Figure8 from '../assets/features/desktop/no-limit.svg'
import Tablet from '../assets/features/desktop/responsive.svg'
import Footer from '../components/footer.js'



const Home = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-8 auto-rows-min'>
                <div style={{backgroundImage: `url(${Pic})`}} className='w-full h-72 md:min-h-full bg-no-repeat bg-cover md:bg-center col-start-1 col-end-9 md:col-start-6 md:col-end-9 lg:col-start-4 row-start-1 row-end-2'></div>
                <section className='bg-black flex flex-col pl-8 pt-16 md:pl-16 col-start-1 col-end-9 md:col-end-6 lg:col-end-4'>
                    <h1 className='text-white text-3xl items-start font-bold pb-4 md:text-4xl md:w-8/12 md:pt-44 w-9/12 lg:w-6/12'>CREATE AND SHARE YOUR PHOTO STORIES.</h1>
                    <p className='text-white opacity-60 text-base font-normal pb-6 md:text-base md:w-10/12 lg:w-7/12'>Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others.</p>
                    <button className='text-white text-xs font-bold flex items-center pb-16 md:pb-44 hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Laptop})`}} className='w-full h-72 md:min-h-full bg-no-repeat bg-cover md:bg-center col-start-1 col-end-9 md:col-end-4 lg:col-end-6'></div>
                <section className='bg-white flex flex-col pl-8 md:pl-16 md:mr-8 pt-16 col-start-1 col-end-9 md:col-start-4 lg:col-start-6 lg:ml-20'>
                    <h1 className='text-black text-3xl items-start font-bold pb-4 w-8/12 md:pt-32 md:text-4xl md:w-3/6 lg:w-5/12'>BEAUTIFUL STORIES EVERY TIME</h1>
                    <p className='text-black opacity-60 text-base font-normal pb-6 lg:w-4/6'>We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone.</p>
                    <button className='text-black text-xs font-bold flex items-center pb-16 md:pb-32 hover:underline'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Man})`}} className='h-96 bg-no-repeat bg-cover md:min-h-full bg-top col-start-1 col-end-9 md:col-start-6 md:row-start-3 lg:col-start-4'></div>
                <section className='bg-white flex flex-col pl-8 md:pl-16 pt-16 col-start-1 col-end-9 md:col-end-6 lg:col-end-4 lg:w-10/12'>
                    <h1 className='text-black text-3xl items-start font-bold md:text-4xl pb-4 w-8/12 md:pt-40'>DESIGNED FOR EVERYONE</h1>
                    <p className='text-black text-base font-normal opacity-60 pb-6 md:mr-14 lg:w-9/12 '>Photosnap can help you create stories that resonate with your audience.  Our tool is designed for photographers of all levels, brands, businesses you name it. </p>
                    <button className='text-black text-xs font-bold flex items-center pb-16 md:pb-40 hover:underline'>VIEW THE STORIES<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </section>
                <div style={{backgroundImage: `url(${Mountains})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 md:col-end-5 lg:col-end-3 md:min-h-full h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white md:pt-96'>The Mountains</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by John Appleseed</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${City})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-9 md:col-start-5 lg:col-start-3 lg:col-end-5 md:h-full h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white md:pt-96'>Sunset Cityscapes</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Benjamin Cruz</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Voyage})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-9 md:col-end-5 lg:col-start-5 lg:col-end-7 md:h-full h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white md:pt-96'>18 Days Voyage</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Alexei Borodin</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Architec})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover flex flex-col justify-end col-start-1 col-end-9 md:col-start-5 lg:col-start-7 md:h-full h-96'>
                    <h2 className='text-lg font-bold pl-8 text-white md:pt-96'>Architecturals</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Samantha Brooke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <section className='col-start-1 col-end-9'>
                    <div className='flex flex-col lg:flex-row items-center  lg:mt-32 lg:mb-32 mt-20'>
                        <div className='flex flex-col items-center lg:ml-44 lg:justify-center'>
                            <img className='h-20 w-20' src={Tablet} alt='tablet'/>
                            <h2 className='mt-12 text-lg font-bold'>100% Responsive</h2>
                            <p className='text-center w-9/12 md:w-8/12 opacity-60 mt-4 text-sm md:text-base font-light'>No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                        </div>
                        <div className='flex flex-col items-center lg:justify-center'>
                            <img className='mt-14 lg:-mt-0 lg:h-16 lg:w-20' src={Figure8} alt='figure8'/>
                            <h2 className='mt-16 text-lg font-bold'>No Photo Upload Limit</h2>
                            <p className='text-center w-9/12 md:w-8/12 opacity-60 mt-4 text-sm md:text-base font-light'>Our tool has no limits on upload or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                        </div>
                        <div className='flex flex-col items-center lg:mr-44 lg:justify-center'>
                            <img className='mt-14 lg:mt-0 lg:h-16 lg:w-20' src={Speaker} alt='speaker'/>
                            <h2 className='mt-16 text-lg font-bold'>Available to Embed</h2>
                            <p className='text-center w-9/12 md:w-8/12 opacity-60 mt-4 text-sm md:text-base font-light lg:pb-0 pb-20'>Embed Tweets,Facebook posts,Instagram media,Vimeo or YouTube videos,Google Maps and more.</p>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </main>
    );
}

export default Home;