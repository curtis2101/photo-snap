import React from 'react'
import Header from '../components/navbar.js'
import Footer from '../components/footer.js'
import Moon from '../assets/stories/mobile/moon-of-appalacia.jpg'
import {BsArrowRight} from 'react-icons/bs'

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
                <Footer/>
            </div>
        </main>
     );
}
 
export default Stories;