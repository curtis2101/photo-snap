import React from 'react'
import classnames from 'classnames';


export default function PriceCards ({textColor, heading, text, price,occurence, bgColor, buttonText, buttonColor,buttonTextColor,top, bottom,shadow}) {
    return ( 
        <>
            <div className={classnames(`text-${textColor} ${bgColor} ${shadow} lg:hidden justify-items-center lg:justify-items-center lg:w-3/12 md:justify-items-start grid grid-cols-7 w-10/12 md:w-11/12 ${bottom}`)}>
                <h1 className={classnames(`col-start-3 md:col-start-1 lg:col-start-4 col-end-6 lg:col-end-5 md:col-end-3 text-2xl font-bold ${top} pt-14 md:pt-10 md:pl-10`)}>{heading}</h1>
                <p className={classnames(`col-start-2 md:col-start-1 lg:col-start-2 col-end-7 lg:col-end-7 md:col-end-4 text-sm font-normal opacity-60 pt-4 text-center md:text-left md:w-11/12  lg:text-center md:pl-10 lg:w-12/12`)}>{text}</p>
                <h2 className={classnames(`col-start-3 md:col-start-6 lg:col-start-4 col-end-6 lg:col-end-5 md:col-end-8 md:row-start-1 lg:row-start-3 text-4xl font-bold pt-10 md:ml-14`)}>{price}</h2>
                <p className={classnames(`col-start-3 md:col-start-6 lg:col-start-3 col-end-6 lg:col-end-6 md:col-end-8 text-sm font-normal opacity-60 md:pt-2  md:ml-16 `)}>{occurence}</p>
                <button className={classnames(`col-start-1 col-end-8 cursor-pointer w-60 lg:w-80 h-10 bg-${buttonColor} text-${buttonTextColor} font-bold text-xs mt-10 md:mt-8 mb-10 md:ml-10`)}>{buttonText}</button>
            </div>
            <div className={classnames(`hidden lg:flex flex-col w-3/12 items-center text-${textColor} ${bgColor} ${shadow} ${bottom}`)}>
                <h1 className={classnames(` text-2xl font-bold ${top} pt-14`)}>{heading}</h1>
                <p className={classnames(`text-sm font-normal opacity-60 pt-4 w-8/12 text-center`)}>{text}</p>
                <h2 className={classnames(`text-4xl font-bold pt-10`)}>{price}</h2>
                <p className={classnames(`text-sm font-normal opacity-60  `)}>{occurence}</p>
                <button className={classnames(`cursor-pointer w-9/12 h-10 bg-${buttonColor} hover:bg-gray-400 hover:text-black text-${buttonTextColor} font-bold text-xs mb-10 mt-10`)}>{buttonText}</button>
            </div>
        </>
    );
}

