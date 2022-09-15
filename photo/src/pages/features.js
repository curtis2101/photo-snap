import React from 'react';
import Header from '../components/navbar.js'
import Footer from '../components/footer.js'
import Camera from '../assets/features/mobile/hero.jpg'
import Camera2 from '../assets/features/tablet/hero.jpg'
import Speaker from '../assets/features/desktop/embed.svg'
import Figure8 from '../assets/features/desktop/no-limit.svg'
import Tablet from '../assets/features/desktop/responsive.svg'
import Drag from '../assets/features/desktop/drag-drop.svg'
import Boost from '../assets/features/desktop/boost-exposure.svg'
import Custom from '../assets/features/desktop/custom-domain.svg'
import Desert from '../assets/shared/mobile/bg-beta.jpg'
import Desert2 from '../assets/shared/tablet/bg-beta.jpg'
import {BsArrowRight} from 'react-icons/bs'

const Features = () => {
    return (
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-8 auto-rows-min'>
                <img src={Camera} alt='man holding camera' className='md:hidden flex col-start-1 col-end-9 w-full h-72'/>
                <img src={Camera2} alt='man holding camera' className='hidden md:block col-start-6 col-end-9 row-start-1 w-full '/>
                <div className='col-start-1 col-end-9 md:col-end-6 pl-7 pr-7 md:pl-14 md:pr-14 bg-black text-white '>
                    <h1 className='text-3xl md:text-4xl font-bold pt-16 md:mt-44 md:pt-0'>FEATURES</h1>
                    <p className='font-normal text-base md:text-lg opacity-60 pt-4 md:pt-5 pb-16 md:pb-0 md:mb-44'>We make sure all of our features are designed to be loved by every aspiring and even professional photograpers who wanted to share their stories.</p>
                </div>
                <section className='col-start-1 col-end-9'>
                    <div className='flex flex-col md:flex-row md:flex-wrap md:items-start items-center lg:mt-32 lg:mb-32 mt-20'>
                        <div className='flex flex-col items-center md:w-3/6 md:pt-9 lg:ml-44 lg:justify-center'>
                            <img className='h-20 w-20' src={Tablet} alt='tablet'/>
                            <h2 className='mt-12 text-lg font-bold'>100% Responsive</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light'>No matter which the device you're on, our site is fully responsive and stories look beautiful on any screen.</p>
                        </div>
                        <div className='flex flex-col items-center md:w-3/6 md:pt-16 lg:justify-center'>
                            <img className='mt-14 md:mt-0 lg:h-16 lg:w-20' src={Figure8} alt='figure8'/>
                            <h2 className='mt-16 md:mt-16 text-lg font-bold'>No Photo Upload Limit</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light'>Our tool has no limits on upload or bandwidth. Freely upload in bulk and share all of your stories in one go.</p>
                        </div>
                        <div className='flex flex-col items-center md:w-3/6 lg:mr-44 lg:justify-center'>
                            <img className='mt-14 lg:mt-0 lg:h-16 lg:w-20' src={Speaker} alt='speaker'/>
                            <h2 className='mt-16 text-lg font-bold'>Available to Embed</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light lg:pb-0 pb-20'>Embed Tweets,Facebook posts,Instagram media,Vimeo or YouTube videos,Google Maps and more.</p>
                        </div>
                        <div className='flex flex-col items-center md:w-3/6 lg:ml-44 lg:justify-center'>
                            <img className='h-20 w-20 md:mt-16' src={Custom} alt='Custom Domain'/>
                            <h2 className='mt-12 text-lg font-bold'>Custom Domain</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light'>With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!</p>
                        </div>
                        <div className='flex flex-col items-center md:w-3/6 lg:justify-center'>
                            <img className='mt-14 md:mt-0 lg:h-16 lg:w-20' src={Boost} alt='Boost svg'/>
                            <h2 className='mt-16 text-lg font-bold'>Boost Your Exposure</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light'>Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.</p>
                        </div>
                        <div className='flex flex-col items-center md:w-3/6 lg:mr-44 lg:justify-center'>
                            <img className='mt-14 md:mt-0 lg:h-16 lg:w-20' src={Drag} alt='Drag and Drop svg'/>
                            <h2 className='mt-16 text-lg font-bold'>Drag & Drop Image</h2>
                            <p className='text-center w-9/12 md:w-11/12 opacity-60 mt-4 text-sm md:text-base font-light lg:pb-0 pb-20'>Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.</p>
                        </div>
                    </div>
                </section>
                <div style={{backgroundImage: `url(${Desert})`}} className='md:hidden pl-8 md:pl-10 pr-8 md:pr-10 flex flex-col md:justify-between md:flex-row text-white pt-16 pb-16 col-start-1 col-end-9 bg-no-repeat bg-cover bg-center'>
                    <h2 className='text-4xl font-bold uppercase pb-6 md:w-5/12 '>We’re in beta. Get your invite today!</h2>
                    <button className='text-xs font-bold flex items-center hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
                <div style={{backgroundImage: `url(${Desert})`}} className='hidden pl-8 md:pl-10 pr-8 md:pr-10 md:flex flex-col md:justify-between md:flex-row text-white pt-16 pb-16 col-start-1 col-end-9 bg-no-repeat bg-cover bg-center'>
                    <h2 className='text-4xl font-bold uppercase pb-6 md:w-5/12 '>We’re in beta. Get your invite today!</h2>
                    <button className='text-xs font-bold flex items-center hover:underline'>GET AN INVITE<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
                </div>
            <Footer/>
            </div>
        </main>
    );
}

export default Features;