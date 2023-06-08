import { useState } from 'react';
import Panel from "../components/Panel";
import Info from "../components/Info";
import SectionTitles from "../components/SectionTitles";
import Card from "../components/Card";
import Button from '../components/Button';



// Data to replace
const contactIntro = <p> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible. </p>

function Contact(){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const sendMessage = async () => {
        // try {
        //     await // set up with whatever db you are using (name, email, message)
        // } catch (err){
        //     console.log(err)
        //     setName('')
        //     setEmail('')
        //     setMessage('')
        // }
    }

    return (
        <Panel className='relative bg-gray-50 flex flex-col justify-center place-content-center dark:bg-black pb-8'>
            <div id="contact-anchor" className="anchor"></div>
            <section id="contact">
                <SectionTitles>CONTACT</SectionTitles>
                    <Info className='flex justify-center text-center ml-10 mr-10 md:text-xl md:ml-56 md:mr-56'>{contactIntro}</Info> 
                    <Card className='bg-white rounded-lg md:translate-x-full dark:bg-slate-500 pl-16'>
                        <h1 className='tracking-widest text-lg p-2 font-bold dark:text-indigo-500'>NAME</h1>
                        <input
                        placeholder="Enter Your Name "
                        onChange={(e)=>setName(e.target.value)}
                        className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <h1 className='tracking-widest text-lg p-2 font-bold dark:text-indigo-500'>EMAIL</h1>
                        <input
                        placeholder="Enter Your Email "
                        onChange={(e)=>setEmail(e.target.value)}
                        className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <h1 className='tracking-widest text-lg p-2 font-bold dark:text-indigo-500'>MESSAGE</h1>
                        <textarea
                        placeholder="Enter Your Message "
                        onChange={(e)=>setMessage(e.target.value)}
                        className='block p-2.5 bg-slate-100 w-11/12 h-56 rounded-lg p-4 tracking-widest hover:ring hover:ring-amber-100 focus:outline-none focus:ring focus:ring-amber-300 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <Button onClick={sendMessage}>SUBMIT</Button>
                    </Card>
            </section>
            
        </Panel>
    )
}
export default Contact;