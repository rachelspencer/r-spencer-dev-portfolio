import { useState } from 'react';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import polly89 from '../images/polly89.png'
import BenDoggett from '../images/BenDoggett.jpeg'

function ImageSlider(){
    const [currentTestimonialIndx, setCurrentTestimonialIndx] = useState(0);

    const testimonials = [
        {
            image: polly89,
            name:"Christina Woodhams",
            quote:"I had the pleasure of collaborating with Rachel on a project. We studied together at DevMountain, and her passion and commitment to the program were evident from day one. She caught on to new technologies quickly and was always incredibly insightful in class. That, along with her attention to detail, and artistic designs, pushed me to reach out and collaborate with her on a project. And I wasn't disappointed! She's extremely motivated and always stays on task. We completed our project in just a few weeks, and I hope to collaborate with her on many more projects.",
        },
        {
            image: BenDoggett,
            name:'Ben Doggett',
            quote: "I had the incredible privilege of mentoring Rachel as a developer during her time at Devmountain. I have consistently found myself amazed by her unwavering dedication, infectious enthusiasm, and remarkable growth in the field. Throughout our time together, Rachel has demonstrated exceptional proficiency in a diverse range of programming languages, libraries, and tools, notably including JavaScript and React.js. Her comprehensive understanding of both front-end and back-end technologies is truly commendable, and her insatiable thirst for knowledge never ceases to impress me.",
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