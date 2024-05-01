import Card from "../components/Card";
import Panel from "../components/Panel";
// import Button from '../components/Button'
import Info from "../components/Info";
import Anchor from "../components/Anchor";
import Media from "../components/Media";
import SectionTitles from "../components/SectionTitles";
import Subtitles from "../components/Subtitles";
import Portfolio_screenshot from "../images/Portfolio_screenshot.png"
import Promptopia_screenshot from "../images/Promptopia_screenshot.png"


function Projects(){
    // const handleClick = ({ children, className, ...rest }) => {
    // };
    
    // Data to replace
    // const media = 'https://hips.hearstapps.com/hmg-prod/images/cute-cat-photos-1593441022.jpg?crop=1.00xw:0.753xh;0,0.153xh&resize=1200:*'

    //Project 1
    const intro1= <p> Here you will find some of my personal projects. </p>
    const paragraph1 = <p>This app serves as a comprehensive guide to restaurants, activities, and 'must-tries' in my hometown of Cairns, Australia. Users can easily explore and mark experiences as completed once they've enjoyed an item from the cards. Additionally, they have the freedom to contribute by adding new items—simply by providing a title, the recommender's name, and an image link.</p>
    const paragraph2 = <p>The application itself was crafted in Visual Studio Code, leveraging HTML, CSS and Vanilla JavaScript, along with the powerful frameworks Express and Node.js. To facilitate seamless data interaction, SQL is adeptly utilized to engage with a Heroku database.</p>
    const paragraph3 = <p>The wireframes, meticulously designed using Figma, provided a solid blueprint for the application's user interface, ensuring a user-friendly experience.</p>
    const hyperlinkCrnsAppFigmas ='https://www.figma.com/file/tICh7zBARsNvmG949duas6/crns23?type=design&node-id=0%3A1&mode=design&t=NeCvXKTEj0cTrca2-1'
    const hyperlinkCrnsAppGitHub = "https://github.com/rachelspencer/rachel-spencer-capstone-2022"
    const hyperlinkCrnsAppHosted = 'https://www.exploringcairns.com/'
    //Project 2
    const paragraph4 = <p>This app empowers users to effectively manage their personal book collection, offering a platform to track books on their bookshelf. As the app evolves, users will be able to seamlessly augment their collection with notes and memorable quotes.</p>
    const paragraph5 = <p>My journey with this project marked my inaugural experience with React and Bit.io, two technologies that enhanced the application's dynamism. I harnessed the capabilities of Node.js, Express, and SQL to create a robust foundation. The incorporation of CSS brought to life the wireframes that were created in Figma.</p>
    const paragraph6 = <p>This venture also marked a pivotal moment in my development journey: I successfully embraced the useContext hook. It served as a bridge for securely transmitting authentication credentials from the server to the client, elevating both security and efficiency.</p>
    const paragraph7 = <p>Moreover, this project introduced me to the realm of crafting login systems and authentication mechanisms—an invaluable addition to my skill set.</p>
    const hyperlinkBookNotesAppFigmas = "https://www.figma.com/file/NVrt7PZfNSCjxtcIV83otW/Untitled?type=design&mode=design&t=NeCvXKTEj0cTrca2-1"
    const hyperlinkBookNotesGitHub = "https://github.com/rachelspencer/book-notes-app"
    //Project 3
    const paragraph8 =<p>Upon completing my journey at Devmountain, I joined forces with fellow graduate Christina Woodhams to embark on our first collaborative project. Our previous projects had involved servers, but this time, we aimed to craft a serverless application. This choice allowed us to concentrate on refining the front-end developer skills we've cultivated. Additionally, we took the opportunity to experiment with Tailwind CSS as an alternative to traditional CSS. We decided on hosting our portfolios on the Netlify platform.</p>
    const paragraph9 =<p>The experience of collaborating with Christina on this venture was truly fulfilling, allowing me to thrive within a collaborative environment. Our collaboration has ignited a multitude of creative ideas for future projects, and we're excited to bring them to life in the coming months.</p>
    const hyperlinkDevPortGitHub = "https://github.com/rachelspencer/r-spencer-dev-portfolio"
    //Project 4
    const paragraph10 =<p>Promptopia is a platform designed to streamline AI prompt usage by allowing you to easily copy and paste prompts into other applications, like ChatGPT. After finishing my Dev Portfolio project, I wanted to practice building another serverless application and therefore experimented using Next.js. A tutorial by JavaScript Mastery assisted me in executing this project and introduced me to some of Next.js features; such as file-system based Routing, Client-side and Server-side Rendering with Client and Server components and simplified data fetching with async/await for Server Components. </p>
    const paragraph11 =<p>OAuth was used for User Authentication. MongoDB was implemented as a cloud based database and interacted with using the Node.js library Mongoose.  Deployment was managed using Vercel.</p>
    const paragraph12 =<p>So where from here? I plan to use the functionality of this application to build a clone that can be used to store study ‘post-it notes’ on the topics I am currently studying that revolve around frontend software engineering. This clone project will allow me to further practice not only using Next.js, but React, JavaScript, CSS and other mentioned products and libraries</p>
    const hyperlinkPromptGitHub = "https://github.com/rachelspencer/promptopia"
    const hyperlinkPromptSite = "https://promptopia-nu-taupe.vercel.app/"
    return (
        <Panel className='relative bg-white dark:bg-black'>
            <div id="projects-anchor" className="anchor"></div>
            <SectionTitles> MY PROJECTS </SectionTitles>
                <div>
                    <Info className='flex justify-center text-center mx-10 md:text-xl md:mx-46 xl:mx-56'>{intro1}</Info>
                    
                    <div className='flex flex-col md:flex-row justify-center'>
                        <Card>
                            <Media alt='cairns app video' src={"assets/Rachel_Spencer_Crns_app.mp4"}/>
                        </Card>
                        <Card className='justify-start'>
                            <Subtitles>Cairns Travel Guide</Subtitles>
                            <Info>{paragraph1}</Info>
                            <Info>{paragraph2}</Info>
                            <Info>{paragraph3}</Info>
                            <Anchor href={hyperlinkCrnsAppFigmas}>View Wireframes</Anchor>
                            <br />
                            <Anchor href={hyperlinkCrnsAppGitHub}>View GitHub</Anchor>
                            <br />
                            <Anchor href={hyperlinkCrnsAppHosted}>View Hosted App</Anchor>
                            {/* <Button onClick={handleClick}> VIEW PROJECT</Button> */}
                        </Card>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                        <Card>
                            <Media alt='booknotes app video' src={"assets/Rachel_Spencer_Specs_Capstone.mp4"}/>
                        </Card>
                        <Card className='justify-start'>
                            <Subtitles>BookNotes</Subtitles>
                            <Info>{paragraph4}</Info>
                            <Info>{paragraph5}</Info>
                            <Info>{paragraph6}</Info>
                            <Info>{paragraph7}</Info>
                            <Anchor href={hyperlinkBookNotesAppFigmas}>View Wireframes</Anchor>
                            <br />
                            <Anchor href={hyperlinkBookNotesGitHub}>View GitHub</Anchor>
                            {/* <Button onClick={handleClick}> VIEW PROJECT</Button> */}
                        </Card>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                    <Card>
                        <img className="w-full h-auto rounded-lg shadow-lg" alt='portfolio screenshot' src={Portfolio_screenshot}/>
                    </Card>
                    <Card className='justify-start'>
                        <Subtitles>My Dev Portfolio</Subtitles>
                        <Info>{paragraph8}</Info>
                        <Info>{paragraph9}</Info>
                        <Anchor href={hyperlinkDevPortGitHub}>View GitHub</Anchor>
                        {/* <Button onClick={handleClick}> VIEW PROJECT</Button> */}
                    </Card>
                </div>
                <div className='flex flex-col md:flex-row justify-center'>
                    <Card>
                        <img className="w-full h-auto rounded-lg shadow-lg" alt='promptopia screenshot' src={Promptopia_screenshot}/>
                    </Card>
                    <Card className='justify-start'>
                        <Subtitles>Promptopia</Subtitles>
                        <Info>{paragraph10}</Info>
                        <Info>{paragraph11}</Info>
                        <Info>{paragraph12}</Info>
                         <Anchor href={hyperlinkPromptGitHub}>View GitHub</Anchor>
                         <br />
                         <Anchor href={hyperlinkPromptSite}>View Promptopia</Anchor>
                        {/* <Button onClick={handleClick}> VIEW PROJECT</Button> */}
                    </Card>
                </div>
            </div>
        </Panel>
    )
}
export default Projects;