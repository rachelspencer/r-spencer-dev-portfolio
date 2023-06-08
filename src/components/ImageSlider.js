import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";

function ImageSlider(){
    const [currentTestimonialIndx, setCurrentTestimonialIndx] = useState(0);

    const testimonials = [
        {
            image:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg',
            name:'Chris Pratt',
            quote:`You ladies rule! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
        {
            image:'https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/09/27/08/jennifer-lawrence.jpg',
            name:'Jennifer Lawrence',
            quote:`Let the games begin! Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        },
    ]

    const prev = () => {
        const newIndx = 
        (currentTestimonialIndx - 1 + testimonials.length) % testimonials.length;
        setCurrentTestimonialIndx(newIndx);
    };

    const next = () => {
        const newIndx = (currentTestimonialIndx + 1) % testimonials.length;
        setCurrentTestimonialIndx(newIndx);
    };
    const currentTestimonial = testimonials[currentTestimonialIndx];
    
    return (
        <div className='relative'>
            <div key={currentTestimonialIndx} className='flex place-content-around'>
                <HiChevronDoubleLeft onClick={prev} className='text-3xl md:text-4xl md:mt-8 dark:text-cyan-400'/>
                <div className='flex flex-col md:flex-row justify-center items-center w-8/12 mb-8 drop-shadow-lg bg-gray-50 rounded-md md:rounded-full md:p-4 dark:bg-slate-800 dark:text-slate-400 dark:border dark:border-cyan-500'>
                  <img src={currentTestimonial.image} alt={currentTestimonial.name} className="rounded-full w-24 h-24 object-cover mt-8 md:mt-0" />
                  <p className="text-left m-8 text-ellipsis ">{currentTestimonial.quote}</p>  
                </div>
                
                <HiChevronDoubleRight onClick={next} className='text-3xl md:text-4xl md:mt-8 dark:text-cyan-400'/>
            </div>
        </div>
    );
};
export default ImageSlider;