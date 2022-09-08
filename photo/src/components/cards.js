import {BsArrowRight} from 'react-icons/bs'


const Card = (props) => {
    return (  
            <>
            <p className='text-white text-xs font-normal pl-8 pb-1'>{props.date}</p>
            <h2 className='text-lg font-bold pl-8 text-white'>{props.title}</h2>
            <h3 className='text-xs font-light pl-8 pb-5 text-white'>{props.author}</h3>
            <hr className='w-5/6 ml-8 pb-4 opacity-30'/>
            <button className='inline-flex justify-between hover:underline text-white text-xs w-full pr-7 pl-8 font-bold items-center pb-10'>READ STORY<span className='ml-4 text-2xl'><BsArrowRight/></span></button>
            </>
    );
}
 
export default Card;