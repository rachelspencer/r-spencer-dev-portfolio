import Panel from "../components/Panel";
import Card from "../components/Card";
import Info from "../components/Info";
import Skills from "./Skills";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";
import portfolioData from "../portfolioData";

    function AboutMe(){
    return(
        <Panel className="relative bg-gray-50 dark:bg-black">
            <div id="about-me-anchor" className="anchor"></div>
                <SectionTitles>ABOUT ME</SectionTitles>
                <Info className="flex justify-center mx-10 text-center md:text-xl md:mx-46 xl:ml-56 xl:mr-56">{portfolioData.aboutPara}</Info>
                <div className="flex flex-col md:flex-row justify-center">
                    <Card>
                        <Subtitles>Get to know me!</Subtitles>
                        <Info>{portfolioData.paraOne}</Info>
                        <Info>{portfolioData.paraTwo}</Info>
                        <Info>{portfolioData.paraThree}</Info>
                    </Card>
                    <Card>
                        <Skills />
                    </Card>
            </div>
        </Panel>
    )
};

export default AboutMe;