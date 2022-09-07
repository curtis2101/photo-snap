import React from 'react'
import Header from '../components/navbar.js'
import Footer from '../components/footer.js'
import Moon from '../assets/stories/mobile/moon-of-appalacia.jpg'
import Mountain from '../assets/stories/mobile/mountains.jpg'
import Sunset from '../assets/stories/mobile/cityscapes.jpg'
import {BsArrowRight} from 'react-icons/bs'
import Card from '../components/cards.js'

const Stories = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-8 auto-rows-min'>
                <img src={Moon} alt='moon' className='md:hidden col-start-1 col-end-9 h-80 w-full'/>
                <div className='md:hidden col-start-1 col-end-9 bg-black pt-12 pb-12 pl-7 pr-7'>
                    <p className='text-white text-xs font-bold pb-4'>LAST MONTH'S FEATURED STORY</p>
                    <h1 className='text-3xl text-white font-bold pb-4 w-4/6'>HAZY FULL MOON OF APPALACHIA</h1>
                    <p className='font-normal text-sm text-white pb-6'><span className='opacity-75 pr-2'>March 2nd 2020</span>by John Appleseed</p>
                    <p className='text-base font-normal text-white opacity-60 pb-10'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <button className='inline-flex justify-start hover:underline text-white text-xs w-full font-bold items-center'>READ THE STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <Card   
                    img={Mountain}
                    date="April 16th 2020"
                    title="The Mountains"
                    author="by John Appleseed"
                />
                <Card   
                    img={Sunset}
                    date="April 14th 2020"
                    title="Sunset Cityscapes"
                    author="by Benjamin Cruz"
                />
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 11th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Mountains</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by John Appleseed</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 16th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Mountains</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by John Appleseed</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 16th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>18 Days Voyage</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Alexei Borodin</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 9th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Architecturals</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Samantha Brooke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 7th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>World Tour 2019</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Timothy Wagner</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>April 3rd 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Unforeseen Corners</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by William Malcolm</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 29th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>King on Africa: Part II</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Tim Hillenburg</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 21st 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Trip to Nowhere</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Felicia Rourke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 19th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Rage of The Sea</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Mohammed Abdul</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 16th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Running Free</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Michelle</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 11th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Behind The Waves</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Lamaar Wilson</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 9th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Calm Waters</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Samantha Brooke</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 5th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>The Milky Way</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Benjamin Cruz</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 4th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Night at The Dark Forest</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Mohammed Abdul</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>March 1st 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Somwarpet's Beauty</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by Michelle</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Mountain})`}} className='bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-9 h-96'>
                    <p className='text-white text-xs font-normal pl-8 pb-1'>February 25th 2020</p>
                    <h2 className='text-lg font-bold pl-8 text-white'>Land of Dreams</h2>
                    <h3 className='text-xs font-light pl-8 pb-5 text-white'>by William Malcom</h3>
                    <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
                    <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <Footer/>
            </div>
        </main>
     );
}
 
export default Stories;