import React from 'react'
import classnames from 'classnames';


export default function PriceCards ({textColor, heading, text, price,occurence, bgColor, buttonText, buttonColor,buttonTextColor}) {
    return (  
        <div className={classnames(`text-${textColor} ${bgColor} flex flex-col justify-center items-center w-10/12`)}>
            <h1 className={classnames(`text-2xl font-bold pt-14`)}>{heading}</h1>
            <p className={classnames(`text-sm font-normal opacity-60 pt-4 text-center w-5/6`)}>{text}</p>
            <h2 className={classnames(`text-4xl font-bold pt-10`)}>{price}</h2>
            <p className={classnames(`text-sm font-normal opacity-60 `)}>{occurence}</p>
            <button className={classnames(`cursor-pointer w-60 h-10 bg-${buttonColor} text-${buttonTextColor} font-bold text-xs mt-10 mb-10`)}>{buttonText}</button>
        </div>
    );
}

