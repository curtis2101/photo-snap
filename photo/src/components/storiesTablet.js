import React from 'react'
import Footer from '../components/footer.js'
import Moon from '../assets/stories/tablet/moon-of-appalacia.jpg'
import Moon2 from '../assets/stories/desktop/moon-of-appalacia.jpg'
import Mountain from '../assets/stories/desktop/mountains.jpg'
import Voyage from '../assets/stories/desktop/18-days-voyage.jpg'
import Architecturals from '../assets/stories/desktop/architecturals.jpg'
import World from '../assets/stories/desktop/world-tour.jpg'
import Corners from '../assets/stories/desktop/unforeseen-corners.jpg'
import Africa from '../assets/stories/desktop/king-on-africa.jpg'
import Trip from '../assets/stories/desktop/trip-to-nowhere.jpg'
import Rage from '../assets/stories/desktop/rage-of-the-sea.jpg'
import Running from '../assets/stories/desktop/running-free.jpg'
import Sunset from '../assets/stories/desktop/cityscapes.jpg'
import Waves from '../assets/stories/desktop/behind-the-waves.jpg'
import MilkyWay from '../assets/stories/desktop/milky-way.jpg'
import Forest from '../assets/stories/desktop/dark-forest.jpg'
import Somwarpet from '../assets/stories/desktop/somwarpet.jpg'
import Dreams from '../assets/stories/desktop/land-of-dreams.jpg'
import Waters from '../assets/stories/desktop/calm-waters.jpg'
import {BsArrowRight} from 'react-icons/bs'
import Card from '../components/cards.js'



const Tablet = () => {
    return ( 
        <div className='hidden md:grid grid-cols-8 auto-rows-min'>
                <div style={{backgroundImage: `url(${Moon})`}} className='lg:hidden flex pl-10 pt-32 pb-32 bg-no-repeat bg-cover bg-top flex-col justify-end col-start-1 col-end-9'>
                    <p className='text-white text-xs font-bold pb-4'>LAST MONTH'S FEATURED STORY</p>
                    <h1 className='text-4xl text-white font-bold pb-4 w-3/12'>HAZY FULL MOON OF APPALACHIA</h1>
                    <p className='font-normal text-sm text-white pb-6'><span className='opacity-75 pr-2'>March 2nd 2020</span>by John Appleseed</p>
                    <p className='text-base font-normal text-white opacity-60 pb-6 w-5/12'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <button className='inline-flex justify-start hover:underline text-white text-xs w-full font-bold items-center'>READ THE STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Moon2})`}} className='hidden lg:flex pl-28 pt-32 pb-32 bg-no-repeat bg-cover bg-top flex-col justify-end col-start-1 col-end-9'>
                    <p className='text-white text-xs font-bold pb-4'>LAST MONTH'S FEATURED STORY</p>
                    <h1 className='text-4xl text-white font-bold pb-4 w-2/12'>HAZY FULL MOON OF APPALACHIA</h1>
                    <p className='font-normal text-sm text-white pb-6'><span className='opacity-75 pr-2'>March 2nd 2020</span>by John Appleseed</p>
                    <p className='text-base font-normal text-white opacity-60 pb-6 w-3/12'>The dissected plateau area, while not actually made up of geological mountains, is popularly called "mountains," especially in eastern Kentucky and West Virginia, and while the ridges are not high, the terrain is extremely rugged.</p>
                    <button className='inline-flex justify-start hover:underline text-white text-xs w-full font-bold items-center'>READ THE STORY<span className='ml-4 lg:mr-5 text-2xl'><BsArrowRight/></span></button>
                </div>
        <div style={{backgroundImage: `url(${Mountain})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-5 lg:col-end-3 h-full'>
                <Card   
                    date="April 16th 2020"
                    title="The Mountains"
                    author="by John Appleseed"
                />
                </div>
                <div style={{backgroundImage: `url(${Sunset})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-5 lg:col-start-3 col-end-9 lg:col-end-5 h-full'>
                <Card   
                    date="April 14th 2020"
                    title="Sunset Cityscapes"
                    author="by Benjamin Cruz"
                />
                </div>
                <div style={{backgroundImage: `url(${Voyage})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 lg:col-start-5 lg:col-end-7 md:col-end-5 h-full'>
                <Card   
                    date="April 16th 2020"
                    title="18 Days Voyage"
                    author="by Alexei Borodin"
                />
                </div>
                <div style={{backgroundImage: `url(${Architecturals})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end lg:col-start-7 col-start-5 col-end-9 h-full'>
                <Card   
                    date="April 9th 2020"
                    title="Architecturals"
                    author="by Samantha Brooke"
                />
                </div>
                <div style={{backgroundImage: `url(${World})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-5 lg:col-end-3 h-full'>
                <Card   
                    date="April 7th 2020"
                    title="World Tour 2019"
                    author="by Timothy Wagner"
                />
                </div>
                <div style={{backgroundImage: `url(${Corners})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-5 lg:col-start-3 col-end-9 lg:col-end-5 h-full'>
                <Card   
                    date="April 3rd 2020"
                    title="Unforeseen Corners"
                    author="by William Malcolm"
                />
                </div>
                <div style={{backgroundImage: `url(${Africa})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 lg:col-start-5 lg:col-end-7 md:col-end-5 h-full'>
                <Card  
                    date="March 29th 2020"
                    title="King on Africa: Part II"
                    author="by Tim Hillenburg"
                />
                </div>
                <div style={{backgroundImage: `url(${Trip})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end lg:col-start-7 col-start-5 col-end-9 h-full'>
                <Card   
                    date="March 21st 2020"
                    title="The Trip to Nowhere"
                    author="by Felicia Rourke"
                />
                </div>
                <div style={{backgroundImage: `url(${Rage})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-5 lg:col-end-3 h-full'>
                <Card   
                    date="March 19th 2020"
                    title="Rage of The Sea"
                    author="by Mohammed Abdul"
                />
                </div>
                <div style={{backgroundImage: `url(${Running})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-5 lg:col-start-3 col-end-9 lg:col-end-5 h-full'>
                <Card   
                    date="March 16th 2020"
                    title="Running Free"
                    author="by Michelle"
                />
                </div>
                <div style={{backgroundImage: `url(${Waves})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 lg:col-start-5 lg:col-end-7 md:col-end-5 h-full'>
                <Card   
                    date="March 11th 2020"
                    title="Behind The Waves"
                    author="by Lamaar Wilson"
                />
                </div>
                <div style={{backgroundImage: `url(${Waters})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end lg:col-start-7 col-start-5 col-end-9 h-full'>
                <Card   
                    date="March 9th 2020"
                    title="Calm Waters"
                    author="by Samantha Brooke"
                />
                </div>
                <div style={{backgroundImage: `url(${MilkyWay})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 col-end-5 lg:col-end-3 h-full'>
                <Card   
                    date="March 5th 2020"
                    title="The Milky Way"
                    author="by Benjamin Cruz"
                />
                </div>
                <div style={{backgroundImage: `url(${Forest})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-5 lg:col-start-3 col-end-9 lg:col-end-5 h-full'>
                <Card   
                    date="March 4th 2020"
                    title="Night at The Dark Forest"
                    author="by Mohammed Abdul"
                />
                </div>
                <div style={{backgroundImage: `url(${Somwarpet})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end col-start-1 lg:col-start-5 lg:col-end-7 md:col-end-5 h-full'>
                <Card   
                    date="March 1st 2020"
                    title="Somwarpet's Beauty"
                    author="by Michelle"
                />
                </div>
                <div style={{backgroundImage: `url(${Dreams})`}} className='transform transition hover:-translate-y-10 hover:shadow-2xl duration-500 hover:origin-bottom bg-no-repeat bg-cover bg-center flex flex-col justify-end lg:col-start-7 col-start-5 col-end-9 h-full'>
                <Card   
                    date="February 25th 2020"
                    title="Land of Dreams"
                    author="by William Malcom"
                />
                </div>
                <Footer/>
            </div>
            );}

export default Tablet;