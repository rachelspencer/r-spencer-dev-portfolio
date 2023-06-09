import Card from "../components/Card";
import Panel from "../components/Panel";
import Button from '../components/Button'
import Info from "../components/Info";
import Anchor from "../components/Anchor";
import Media from "../components/Media";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";


function Projects(){
    const handleClick = ({ children, className, ...rest }) => {
    };
    
    // Data to replace
    const media = 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*'

    const intro1= <p> Here you will find some of the personal and clients projects that I created with each project containing its own case study. </p>
    const paragraph1 = <p> Lorem Ipsum is simply dummy text of the <strong>printing and typesetting</strong> industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type <strong>specimen</strong> book.</p>
    const paragraph2 = <p> It has survived not only <strong>five centuries</strong>, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    const paragraph3 = <p>It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like <strong>Aldus PageMaker</strong> including versions of Lorem Ipsum.</p>
    
    const hyperlink ='https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*'

    return (
        <Panel className='relative bg-white dark:bg-black'>
            <div id="projects-anchor" className="anchor"></div>
            <SectionTitles> MY PROJECTS </SectionTitles>
            <Info className='flex justify-center text-center mx-10 md:text-xl md:mx-46 xl:mx-56'>{intro1}</Info>
            <div className='flex flex-col md:flex-row justify-center'>
                <Card>
                    <Media alt='cute kitten' src={media}/>
                </Card>
                <Card className='justify-start'>
                    <Subtitles>My Cat App</Subtitles>
                    <Info>{paragraph1}</Info>
                    <Info>{paragraph2}</Info>
                    <Info>{paragraph3}</Info>
                    <Anchor href={hyperlink}>Test Link</Anchor>
                    <Button onClick={handleClick}> VIEW PROJECT
                    </Button>
                </Card>
            </div>
        </Panel>
    )
}
export default Projects;