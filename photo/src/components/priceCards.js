import React from 'react'
import classnames from 'classnames';


export default function PriceCards ({textColor, heading, text, price,occurence, bgColor, buttonText, buttonColor,buttonTextColor}) {
    return (  
        <div className={classnames(`text-${textColor} ${bgColor} justify-items-center md:justify-items-start grid grid-cols-7 w-10/12 md:w-11/12`)}>
            <h1 className={classnames(`col-start-3 md:col-start-1 col-end-6 md:col-end-3 text-2xl font-bold pt-14 md:pt-10 md:pl-10`)}>{heading}</h1>
            <p className={classnames(`col-start-2 md:col-start-1 col-end-7 md:col-end-4 text-sm font-normal opacity-60 pt-4 text-center md:text-left md:w-11/12 md:pl-10`)}>{text}</p>
            <h2 className={classnames(`col-start-3 md:col-start-6 col-end-6 md:col-end-8 md:row-start-1 text-4xl font-bold pt-10 md:ml-14`)}>{price}</h2>
            <p className={classnames(`col-start-3 md:col-start-6 col-end-6 md:col-end-8 text-sm font-normal opacity-60 md:pt-2 md:ml-16 `)}>{occurence}</p>
            <button className={classnames(`col-start-1 col-end-8 cursor-pointer w-60 h-10 bg-${buttonColor} text-${buttonTextColor} font-bold text-xs mt-10 md:mt-8 mb-10 md:ml-10`)}>{buttonText}</button>
        </div>
        
    );
}

