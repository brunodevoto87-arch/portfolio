import {Link} from "react-router-dom"
import {projects} from "../data/projects"
import {skills} from "../data/skills"
import ProjectCard from "../components/ProjectCard"
import SkillCard from "../components/SkillCard"

function Home(){
    const destacados = projects.filter((p)=> p.destacado)
    return (
    <div className="home">
        {/*Hero*/}
        <section className="hero-section">
            <div className="container-hero-content">
                <div className="hero-text">
                    <p className="hero-greeting">Hola, soy</p>
                    <h1 className="hero-name">Bruno <span className="text-accent">Devoto</span></h1>
                    <h2 className="hero-role">Frontend Developer</h2>
                    <p className="hero-bio">Desarrollo experiencias web modernas con React, JavaScript y Node.js.
                    Arranqué con Python y encontré en The Odin Project la estructura que
                    necesitaba. Hoy construyo proyectos reales y busco crecer en el
                    mundo del desarrollo web y ecommerce.</p>
                    <div className="hero-ctas">
                        <Link to="/projects" className="btn btn-primary">Ver proyectos</Link>
                    </div>
                </div>
                <div className="hero-image">
                    <img src="/images/avatar.png" alt="Bruno Devoto" />
                </div>
            </div>
        </section>
        {/* PROYECTOS DESTACADOS */}
        <section className="section-projects">
            <div className="container">
                <div className="section-header">
                    <h2>Proyectos Destacados</h2>
                    <p>Algunos de los proyectos en los que trabaje</p>
                </div>
                <div className="project-grid">
                    {destacados.map((project) =>(
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
                <div className="section-cta">
                    <Link to="projects" className="btn btn-outline">Ver todos los proyectos →</Link>
                </div>
            </div>
        </section>
        {/*Skills*/}
        <section className="section-skills">
            <div className="container">
                <div className="section-header">
                    <h2>Tecnologias</h2>
                    <p>Herramientas y lenguajes que uso a diario</p>
                </div>
                <div className="skill-grid">
                    {skills.map((skill) =>(
                        <SkillCard key={skill.id} skill={skill}/>
                    ))}
                </div>
            </div>
        </section>
        {/* Cta Final */}
        <section className="section-cta-final">
            <div className="container cta-content">
                <h2>¿Tenes un proyecto en mente?</h2>
                <p>Hablemos. Estoy disponible para nuevos desafios.</p>
                <Link to="/contact" className="btn btn-primary">
                contactame →</Link>
            </div>
        </section>
    </div>
    );
}
export default Home