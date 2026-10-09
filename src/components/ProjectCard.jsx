function ProjectCard({project}){
    return(
        <article className="project-card">
            <div className="project-image">
                {project.imagen ? (
                    <img src={project.imagen} alt={project.nombre} />
                ) : (
                 <span className="project-imagen-placeholder">
                {project.nombre.charAt(0)}
                </span>
                )}
            </div>
            <div className="project-content">
                <h3 className="project-title">{project.nombre}</h3>
                <p className="project.description">{project.descripcion}</p>
                <div className="project-tech">
                    {project.tech.map((t)=>(
                      <span key={t} className="tech-tag">{t}</span>
                    ))}
                </div>
                <div className="project-links">
                    {project.demo && (
                        <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        >
                             Ver demo →
                        </a>
                    )}
                    {project.repo &&(
                        <a 
                        href={project.repo}
                        target="_blank"
                        rel="noopener norefererr"
                        className="project-link project-link-outline">
                            GitHub
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}
export default ProjectCard