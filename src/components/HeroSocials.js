import classNames from "classnames"
import Anchor from "./Panel"
import { FaTwitter, FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa';

function HeroSocials({
    children,
    className,
    ...rest
}) {
    const heroClassNames = classNames(
        //Base Styling
        'drop-shadow-lg tracking-widest',
        //Active Modes
        'hover:text-amber-400',
        //Dark Mode
        'dark:hover:text-cyan-500 dark:active:cyan-500 dark:text-indigo-500',
        //Accounts for customization
        className
    )

    const hyperlink = {
        linkedin:"https://www.linkedin.com/company/ada-lovelace-institute/?originalSubdomain=uk",
        github: "https://gist.github.com/Jen-pac/9951c97cbd17bdece65525bef1a53a2f",
        twitter:"https://twitter.com/AdaLovelaceInst?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor",
        youtube: "https://www.youtube.com/watch?v=J7ITqnEmf-g"
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