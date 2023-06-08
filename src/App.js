import { useState, useEffect } from 'react';
import Header from "./section/Header";
import Intro from "./section/Intro";
import AboutMe from "./section/AboutMe";
import Contact from "./section/Contact";
import Projects from "./section/Projects";
import Testimonials from "./section/Testimonials";
import Footer from "./section/Footer";
import Skeleton from "./components/Skeleton";

function App() {
  const [ isloading, setIsloading ] = useState(true)
  
  useEffect(()=> {
    const timeout = setTimeout(()=> {
      setIsloading(false);
    }, 1300);

    return ()=> {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div>
      {isloading ? (
        <Skeleton times={8} className='w-full h-64'/> 
      ):(
      <div>
        <Header/>
        <Intro/>
        <AboutMe/>
        <Projects/>
        <Contact/>
        <Testimonials/>
        <Footer/>
      </div>
      )}
      
    </div>
  )
}

export default App;
