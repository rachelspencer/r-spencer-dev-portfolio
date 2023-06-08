import Panel from "../components/Panel";
import Card from "../components/Card";
import Info from "../components/Info";
import Skills from "./Skills";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";

// Data to replace
    const intro1 = <p>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.</p>
    const paragraph1 = <p> As a <strong>full stack web developer</strong>, I have a passion for crafting innovative and user-friendly digital experiences. With a blend of front-end and back-end skills, I thrive in creating seamless and robust web applications.</p>
    const paragraph2 = <p> My journey as a web developer began several years ago when I discovered <strong>my love for coding</strong> and problem-solving. Since then, I have honed my skills and acquired a deep understanding of various programming languages, frameworks, and tools relevant to full stack development.</p>
    const paragraph3 = <p>I am excited to collaborate with like-minded individuals and contribute to <strong>impactful projects</strong> in the ever-evolving world of web development.</p>

    function AboutMe(){
    return(
        <Panel className="relative bg-gray-50 dark:bg-black">
            <div id="about-me-anchor" className="anchor"></div>
                <SectionTitles>ABOUT ME</SectionTitles>
                <Info className="flex justify-center text-center md:text-xl md:ml-46 md:mr-46 xl:ml-56 xl:mr-56">{intro1}</Info>
                <div className="flex flex-col md:flex-row justify-center">
                    <Card className=''>
                        <Subtitles>Get to know me!</Subtitles>
                        <Info>{paragraph1}</Info>
                        <Info>{paragraph2}</Info>
                        <Info>{paragraph3}</Info>
                    </Card>
                    <Card>
                        <Skills/>
                    </Card>
            </div>
        </Panel>
    )
};

export default AboutMe;