// import react from "react";
import Skill from "./skill";
import "../styles/skills.css";

let myskill = ["Problem Solving","Data Structure", "Algorithm","C++","JavaScript", "NodeJS","ReactJS"];
function Skills(){
    return <div className="skill-comp max-width-1">
        <div className="skill-head">My Skills are : </div>
        <ul className="skill-list">
            {myskill.map((temp)=>{
                return <Skill name={temp}/>;
            })}
        </ul>
    </div>;
}

export default Skills;
