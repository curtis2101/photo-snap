import React from 'react'
import {MdOutlineCheck} from 'react-icons/md'
import classnames from 'classnames';


export default function TickBoxes ({heading,basic, pro, business}) {
    return ( 
        <>
            <div className='block md:hidden'>
            <h2 className='font-bold text-xs text-black pb-4'>{heading}</h2>
            <div className='flex gap-16'>
                <h2 className='flex flex-col gap-1'>BASIC<span className={classnames(`pb-6 ${basic}`)}><MdOutlineCheck/></span></h2>
                <h2 className='flex flex-col gap-1'>PRO<span className={classnames(`pb-6 ${pro}`)}><MdOutlineCheck/></span></h2>
                <h2 className='flex flex-col gap-1'>BUSINESS<span className={classnames(`pb-6 ${business}`)}><MdOutlineCheck/></span></h2>
            </div>
            <hr className='pb-6 border-black border-1 opacity-25'></hr>
            </div>
            <div className='hidden md:flex justify-between ml-4'>
            <h2 className='font-bold text-xs text-black pb-4'>{heading}</h2>
            <div className='grid grid-cols-8 w-7/12 justify-items-center'>
                <span className={classnames(`pb-6 ${basic} col-start-1 col-end-3`)}><MdOutlineCheck/></span>
                <span className={classnames(`pb-6 ${pro} col-start-4 col-end-6`)}><MdOutlineCheck/></span>
                <span className={classnames(`pb-6 ${business} col-start-7 col-end-9`)}><MdOutlineCheck/></span>
            </div>
            </div>
            <div className='hidden md:flex flex-col'>
                <hr className='pb-6 border-black border-1 opacity-25'></hr>
            </div>
        </>
    );
}

