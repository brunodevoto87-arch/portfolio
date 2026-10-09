import {useState, useMemo} from "react"
import {projects} from "../data/projects"
import ProjectCard from "../components/ProjectCard"

function Projects(){
    const [filterTech, setFilterTech] = useState("Todos");
    
    const allTechs = useMemo(()=> {
        const techs = new Set();
        projects.forEach((p)=> p.tech.forEach((t)=> techs.add(t)));
        return ["Todos", ...Array.from(techs).sort()];
    }, []);

    const proyectosFiltrados = useMemo(()=>{
        if (filterTech === "Todos") return projects;
        return projects.filter((p)=> p.tech.includes(filterTech));
    },[filterTech]);

    return (
        <div className="project-page">
            <section className="page-hero">
                <div className="container">
                    <h1>Proyectos</h1>
                    <p>
                        Una seleccion de proyectos en los que trabaje. Cada uno con su stack tecnologico y link al codigo.
                    </p>
                </div>
            </section>
            <section className="section-projects">
                <div className="container">
                    {/*filtros*/}
                    <div className="projects-filters">
                        {allTechs.map((tech)=>(
                            <button 
                            key={tech}
                            className={`filter-pill ${
                            filterTech === tech ? "active" : ""}`}
                            onClick={() => setFilterTech(tech)}
                            >
                                {tech}
                            </button>
                        ))}
                    </div>
                    {/*contador*/}
                    <p className="project-count">
                        {proyectosFiltrados.length} {""}
                        {proyectosFiltrados.length === 1 ?
                        "proyecto" : "proyectos"}
                    </p>
                    {/*grid*/}
                    <div className="projects-grid">
                        {proyectosFiltrados.length === 0 ? (
                            <p classNanme="no-results">
                                no hay proyectos con esa tecnologia.
                            </p>
                        ) : (
                            proyectosFiltrados.map((project) => (
                                <ProjectCard key={project.id} project={project} />
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Projects