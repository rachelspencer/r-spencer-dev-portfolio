import Panel from "../components/Panel"
import Button from "../components/Button";
import HeroSocials from "../components/HeroSocials";
import { Link } from 'react-scroll';
import { useState, useEffect } from 'react';
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import portfolioData from "../portfolioData";


function Intro(){
    const [isDarkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode(false);
    }
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;

    if (newDarkMode) {
      localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }

    setDarkMode(newDarkMode);
  };

    return (
      <Panel id='intro' className="bg-[url('./images/lightModeHero.jpg')]  dark:bg-[url('https://i.etsystatic.com/42026790/r/il/e29cf9/4842908763/il_fullxfull.4842908763_m1b3.jpg')] bg-no-repeat bg-cover bg-center bg-fixed ">
        <div id="intro-anchor" className="anchor"></div>
        <h1 className="text-yellow-900 text-3xl mx-10 font-bold text-center pt-56 md:text-5xl xl:pt-80 tracking-widest dark:text-indigo-400">HEY, {portfolioData.name.toUpperCase()}</h1>
        <div className="flex justify-center text-center flex-col pb-36">
          <h2 className="text-yellow-900 text-lg md:text-sml p-8 md:pl-36 md:pr-36 xl:pl-96 xl:pr-96 dark:text-slate-400">{portfolioData.introPara}</h2>
          <div className="-translate-y-34">
            <Link 
              to='projects-anchor' 
              smooth={true} 
              duration={500}
              >
              <Button>PROJECTS</Button>
            </Link>
            <div className='flex justify-center'>
              <DarkModeSwitch
                className='w-8 h-8 m-24 p-2 border-2 border-orange-400 text-orange-400 rounded-full bg-white dark:bg-slate-900 dark:border-indigo-500 dark:text-indigo-500'
                checked={isDarkMode}
                onChange={toggleDarkMode}
                size={120}
              />
            </div> 
          </div>
        </div>
        <div className="absolute top-1/2 transform -translate-y-1/2 invisible md:visible">
          <HeroSocials></HeroSocials>
        </div>
      </Panel>
    )
};
export default Intro;