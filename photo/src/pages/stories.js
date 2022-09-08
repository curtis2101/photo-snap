import React from 'react'
import Header from '../components/navbar.js'
import Mobile from '../components/storiesMobile.js'
import Tablet from '../components/storiesTablet.js'

const Stories = () => {
    return ( 
        <main className='flex flex-col h-screen w-full overflow-x-hidden overflow-scroll'>
            <Header/>
            <Mobile/>
            <Tablet/>
        </main>
    );
}

export default Stories;