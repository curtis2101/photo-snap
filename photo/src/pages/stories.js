import React from 'react'
import Header from '../components/navbar.js'
import Footer from '../components/footer.js'
import Moon from '../assets/stories/mobile/moon-of-appalacia.jpg'
import Mountain from '../assets/stories/mobile/mountains.jpg'
import Voyage from '../assets/stories/mobile/18-days-voyage.jpg'
import Architecturals from '../assets/stories/mobile/architecturals.jpg'
import World from '../assets/stories/mobile/world-tour.jpg'
import Corners from '../assets/stories/mobile/unforeseen-corners.jpg'
import Africa from '../assets/stories/mobile/king-on-africa.jpg'
import Trip from '../assets/stories/mobile/trip-to-nowhere.jpg'
import Rage from '../assets/stories/mobile/rage-of-the-sea.jpg'
import Running from '../assets/stories/mobile/running-free.jpg'
import Sunset from '../assets/stories/mobile/cityscapes.jpg'
import Waves from '../assets/stories/mobile/behind-the-waves.jpg'
import MilkyWay from '../assets/stories/mobile/milky-way.jpg'
import Forest from '../assets/stories/mobile/dark-forest.jpg'
import Somwarpet from '../assets/stories/mobile/somwarpet.jpg'
import Dreams from '../assets/stories/mobile/land-of-dreams.jpg'
import Waters from '../assets/stories/mobile/calm-waters.jpg'
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
                <Card   
                    img={Voyage}
                    date="April 16th 2020"
                    title="18 Days Voyage"
                    author="by Alexei Borodin"
                />
                <Card   
                    img={Architecturals}
                    date="April 9th 2020"
                    title="Architecturals"
                    author="by Samantha Brooke"
                />
                <Card   
                    img={World}
                    date="April 7th 2020"
                    title="World Tour 2019"
                    author="by Timothy Wagner"
                />
                <Card   
                    img={Corners}
                    date="April 3rd 2020"
                    title="Unforeseen Corners"
                    author="by William Malcolm"
                />
                <Card   
                    img={Africa}
                    date="March 29th 2020"
                    title="King on Africa: Part II"
                    author="by Tim Hillenburg"
                />
                <Card   
                    img={Trip}
                    date="March 21st 2020"
                    title="The Trip to Nowhere"
                    author="by Felicia Rourke"
                />
                <Card   
                    img={Rage}
                    date="March 19th 2020"
                    title="Rage of The Sea"
                    author="by Mohammed Abdul"
                />
                <Card   
                    img={Running}
                    date="March 16th 2020"
                    title="Running Free"
                    author="by Michelle"
                />
                <Card   
                    img={Waves}
                    date="March 11th 2020"
                    title="Behind The Waves"
                    author="by Lamaar Wilson"
                />
                <Card   
                    img={Waters}
                    date="March 9th 2020"
                    title="Calm Waters"
                    author="by Samantha Brooke"
                />
                <Card   
                    img={MilkyWay}
                    date="March 5th 2020"
                    title="The Milky Way"
                    author="by Benjamin Cruz"
                />
                <Card   
                    img={Forest}
                    date="March 4th 2020"
                    title="Night at The Dark Forest"
                    author="by Mohammed Abdul"
                />
                <Card   
                    img={Somwarpet}
                    date="March 1st 2020"
                    title="Somwarpet's Beauty"
                    author="by Michelle"
                />
                <Card   
                    img={Dreams}
                    date="February 25th 2020"
                    title="Land of Dreams"
                    author="by William Malcom"
                />
                <Footer/>
            </div>
        </main>
     );
}
 
export default Stories;