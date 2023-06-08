import Subtitles from "../components/Subtitles";
import Tile from "../components/Tile";

// need to map over skills eg "CSS", "Figma" etc and render each skill onto a tile component 

function Skills(){
    const skillsArr = ['HTML', 'CSS', 'GIT', 'GitHub', 'React', 'Figma', 'JavaScript', 'SQL Basics', 'Responsive Design', 'Terminal'];

    const skillToRender = skillsArr.map((skill) => <Tile skill={skill} />)
    
    return (
        <div>
            <Subtitles>My Skills</Subtitles>
            <div className="flex flex-wrap">{skillToRender}</div>
        </div>
        
        
    )
}
export default Skills;