function SkillCard({skill}){
    return(
        <div className="skill-card">
            <h3 className="skill-name">{skill.nombre}</h3>
            <p className="skill-category">{skill.categoria}</p>
            <span className="skill-level">{skill.nivel}</span>
        </div>
    )
}
export default SkillCard