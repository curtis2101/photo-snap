import React from 'react'
import {MdOutlineCheck} from 'react-icons/md'
import classnames from 'classnames';


export default function TickBoxes ({heading,basic, pro, business}) {
    return ( 
        <>
        <h2 className='font-bold text-xs text-black pb-4'>{heading}</h2>
        <div className='flex gap-16'>
            <h2 className='flex flex-col gap-1'>BASIC<span className={classnames(`pb-6 ${basic}`)}><MdOutlineCheck/></span></h2>
            <h2 className='flex flex-col gap-1'>PRO<span className={classnames(`pb-6 ${pro}`)}><MdOutlineCheck/></span></h2>
            <h2 className='flex flex-col gap-1'>BUSINESS<span className={classnames(`pb-6 ${business}`)}><MdOutlineCheck/></span></h2>
        </div>
        <hr className='pb-6 border-black border-1 opacity-25'></hr>
        </>
    );
}

