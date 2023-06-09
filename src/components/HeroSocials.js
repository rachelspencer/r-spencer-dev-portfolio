import classNames from "classnames"
import Anchor from "./Panel"
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';
import portfolioData from "../portfolioData";

function HeroSocials({
    children,
    className,
    ...rest
}) {
    const heroClassNames = classNames(
        //Base Styling
        'drop-shadow-lg tracking-widest text-yellow-900',
        //Active Modes
        'hover:text-orange-400',
        //Dark Mode
        'dark:hover:text-cyan-500 dark:active:cyan-500 dark:text-indigo-500',
        //Accounts for customization
        className
    )

    const hyperlink = {
        linkedin:"https://www.linkedin.com/in/rachel-spencer-87a539246/",
        github: "https://github.com/rachelspencer",
        twitter:"https://twitter.com/coderdownunder",
        youtube: "https://www.youtube.com/channel/UC5vO-FJn0lexGMr2iSf1Kww"
    }

    const hyperlinkToRender = (hyperlink) => {
        return Object.values(hyperlink);
      };

 return (
    <div className="h-60 w-10 p-2 gap-8 bg-white flex flex-col rounded justify-center drop-shadow-md dark:bg-slate-900">
        <Anchor {...rest} className={heroClassNames} href={hyperlinkToRender(hyperlink)[0]}><FaLinkedin size={24}/></Anchor>
        <Anchor {...rest} className={heroClassNames} href={hyperlinkToRender(hyperlink)[1]}><FaGithub size={24}/></Anchor>
        <Anchor {...rest} className={heroClassNames} href={hyperlinkToRender(hyperlink)[2]}><FaTwitter size={24}/></Anchor>
        <Anchor {...rest} className={heroClassNames} href={hyperlinkToRender(hyperlink)[3]}><FaYoutube size={24}/></Anchor>
    </div>
 )
}

export default HeroSocials;