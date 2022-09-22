import React from 'react'
import { Switch } from "@material-tailwind/react";
import Header from '../components/navbar.js'
import Footer from '../components/footer.js'
import Woman from '../assets/pricing/mobile/hero.jpg'
import { useState } from 'react';
import Card from '../components/priceCards.js'

const Price = () => {
    const [toggle,setToggle] = useState(false)
    return (
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <div className='grid grid-cols-8 auto-rows-min'>
                <img src={Woman} alt='woman with camera' className='col-start-1 col-end-9'/>
                <div className='col-start-1 col-end-9 lg:col-end-4 md:col-end-6 pl-7 pr-7 md:pl-14 md:pr-14 lg:pl-20 lg:pr-20 bg-black text-white '>
                    <h1 className='text-3xl md:text-4xl font-bold pt-16 md:mt-44 md:pt-0 lg:pt-20'>PRICING</h1>
                    <p className='font-normal text-base md:text-lg opacity-60 pt-4 md:pt-5 lg:pt-7 lg:w-full pb-16 md:pb-0 md:mb-44'>Create a your stories, Photosnap is a platform for photographers and visual storytellers. It’s the simple way to create and share your photos.</p>
                </div>
                <div className='col-start-1 col-end-9 bg-white'>
                {toggle? <section className='flex items-center gap-8 pt-16 pb-10 justify-center'>
                        <p className='text-lg font-bold opacity-50'>Monthly</p>
                        <Switch defaultChecked onClick={()=>setToggle(!toggle)} ripple={false} color="brown" />
                        <p className='text-lg font-bold'>Yearly</p>
                    </section>  : 
                    <section className='flex items-center gap-8 pt-16 pb-10 justify-center'>
                        <p className='text-lg font-bold'>Monthly</p>
                        <Switch onClick={()=>setToggle(!toggle)} ripple={false} color="brown" />
                        <p className='text-lg font-bold opacity-50'>Yearly</p>
                    </section>  }
                </div>
                {toggle?
                    <div className='col-start-1 col-end-9 flex flex-col items-center gap-6'>
                        <Card
                        heading='Basic'
                        text='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
                        price='$190.00'
                        occurence='per year'
                        bgColor='bg-gray-100'
                        buttonText='PICK PLAN' 
                        buttonColor='black'
                        buttonTextColor='white'
                        textColor='black'
                        />
                        <Card
                        heading='Pro'
                        text='More advanced features available. Recommended for photography veterans and professionals.'
                        price='$390.00'
                        occurence='per year'
                        bgColor='bg-black'
                        buttonText='PICK PLAN' 
                        buttonColor='white'
                        buttonTextColor='black'
                        textColor='white'
                        />
                        <Card
                        heading='Business'
                        text='Additional features available such as more detailed metrics. Recommended for business owners.'
                        price='$990.00'
                        occurence='per year'
                        bgColor='bg-gray-100'
                        buttonText='PICK PLAN' 
                        buttonColor='black'
                        buttonTextColor='white'
                        textColor='black'
                        />
                </div> :
                <div className='col-start-1 col-end-9 flex flex-col items-center gap-6'>
                        <Card
                        heading='Basic'
                        text='Includes basic usage of our platform. Recommended for new and aspiring photographers.'
                        price='$19.00'
                        occurence='per month'
                        bgColor='bg-gray-100'
                        buttonText='PICK PLAN' 
                        buttonColor='black'
                        buttonTextColor='white'
                        textColor='black'
                        />
                        <Card
                        heading='Pro'
                        text='More advanced features available. Recommended for photography veterans and professionals.'
                        price='$39.00'
                        occurence='per month'
                        bgColor='bg-black'
                        buttonText='PICK PLAN' 
                        buttonColor='white'
                        buttonTextColor='black'
                        textColor='white'
                        />
                        <Card
                        heading='Business'
                        text='Additional features available such as more detailed metrics. Recommended for business owners.'
                        price='$99.00'
                        occurence='per month'
                        bgColor='bg-gray-100'
                        buttonText='PICK PLAN' 
                        buttonColor='black'
                        buttonTextColor='white'
                        textColor='black'
                        />
                </div>}
                <Footer/>
            </div>
        </main>
    );
}
 
export default Price;