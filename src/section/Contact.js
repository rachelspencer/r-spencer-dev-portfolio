import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Panel from "../components/Panel";
import Info from "../components/Info";
import SectionTitles from "../components/SectionTitles";
import Card from "../components/Card";
import Button from "../components/Button";
import portfolioData from "../portfolioData";

function Contact(){
    const form = useRef();
   
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t55mz2c', 'template_37kdr46', form.current, 'gjqJBh7-YSrbGSMdb')
      .then((result) => {
          console.log(result.text);
          form.current.reset();
          alert("Contact form sent. Rachel will be in contact soon!")
      }, (error) => {
          console.log(error.text);
      });
  };

    return (
        <Panel className='relative bg-gray-50 flex flex-col justify-center place-content-center dark:bg-black pb-8'>
            <div id="contact-anchor" className="anchor"></div>
            <section id="contact">
                <SectionTitles>CONTACT</SectionTitles>
                    <Info className='flex justify-center text-center ml-10 mr-10 md:text-center md:text-xl md:ml-56 md:mr-56'>{portfolioData.contactPara}</Info> 
                    <Card className='bg-white rounded-lg md:translate-x-full dark:bg-slate-500 pl-16'>
                        <form ref={form} onSubmit={sendEmail}>
                        <label className='tracking-widest text-yellow-900 text-lg p-2 font-bold dark:text-indigo-500'>NAME</label>
                        <input
                        type="text"
                        name="user_name"
                        placeholder="Enter Your Name"
                        className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-rose-200 focus:outline-none focus:ring focus:ring-rose-600 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <label className='tracking-widest text-yellow-900 text-lg p-2 font-bold dark:text-indigo-500'>EMAIL</label>
                        <input
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email"
                        className='bg-slate-100 w-11/12 h-12 rounded-lg p-4 tracking-widest hover:ring hover:ring-rose-200  focus:outline-none focus:ring focus:ring-rose-600 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <label className='tracking-widest text-yellow-900 text-lg p-2 font-bold dark:text-indigo-500'>MESSAGE</label>
                        <textarea
                        name="message"
                        placeholder="Enter Your Message"
                        className='block p-2.5 bg-slate-100 w-11/12 h-56 rounded-lg p-4 tracking-widest hover:ring hover:ring-rose-200 focus:outline-none focus:ring focus:ring-rose-600 dark:bg-black dark:focus:ring-indigo-500 dark:text-slate-400' />
                        <Button type="submit">SUBMIT</Button>
                        </form>
                    </Card>
            </section>
            
        </Panel>
    )
}
export default Contact;