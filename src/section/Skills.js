import Subtitles from "../components/Subtitles";
import Tile from "../components/Tile";

// need to map over skills eg "CSS", "Figma" etc and render each skill onto a tile component 

function Skills(){
    const skillsArr = ['HTML', 'CSS', 'GIT', 'GitHub', 'React', 'Figma', 'JavaScript', 'SQL Basics', 'Responsive Design', 'Terminal', 'Firebase', 'SQl', 'noSQL', 'Heroku', 'Netlify'];

    const skillToRender = skillsArr.map((skill) => <Tile skill={skill} />)
    
    return (
        <div>
            <Subtitles className="pb-4">My Skills</Subtitles>
            <div className="flex flex-wrap">{skillToRender}</div>
        </div>
        
        
    )
}
export default Skills;