import { skillsData } from "../data/skillsData"
function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skillsData.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>

        </section>
    )
}

export default Skills
