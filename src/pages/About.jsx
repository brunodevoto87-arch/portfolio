import {Link} from "react-router-dom"
import {skills} from "../data/skills"

function About(){
    const skillPorCategoria = skills.reduce((acc,skill) =>{
        if (!acc[skill.categoria]) acc[skill.categoria] = [];
        acc[skill.categoria].push(skill);
        return acc;
    }, {});

    return (
        <div className="about-page">
            {/*Hero*/}
            <section className="page-hero">
                <div className="container">
                    <h1>Sobre mi</h1>
                    <p>Un poco de mi historia y mi camino en el desarrollo web</p>
                </div>
            </section>
            {/*Bio*/}
            <section className="section-about">
                <div className="container-about-grid">
                    <div className="about-image">
                        <img src="/images/avatar.png" alt="Bruno Devoto" />
                    </div>
                    <div className="about-text">
                        <h2>Hola, soy Bruno</h2>
                        <p>
                            Soy desarrollador web fronted. Arranque mi camino en la programacion con Python  y tutoriales sueltos, hasta que encontre {"    "} <strong>The Odin Proyect</strong> y le encontre la estructura que necesitaba.
                        </p>
                        <p>
                            Me gusta aprender haciendo, resolver problemas y ver como las ideas se transforman en productos funcionales. Actualemente estoy profundizando en el ecosistema  de <strong>Node.js</strong> y bases de datos para poder construir aplicaciones full-stack.
                        </p>
                    
                        <div className="about-ctas">
                            <Link to="/projects" className="btn btn-primary">
                            Ver proyectos
                            </Link>
                            <Link to="/contact"         className="btn btn-outline">
                            Contactame
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            {/*Skill por categoria*/}
            <section className="section-skills">
                <div className="container">
                    <div className="section-header">
                        <h2>Tecnologias</h2>
                        <p>Las Herramientas y lenguajes que uso en mis proyectos</p>
                    </div>
                    <div className="skills-categories">
                        {Object.entries(skillPorCategoria).map(([categoria,items])=>(
                            <div key={categoria} className="skill-categorie-group">
                                <h3 className="skill-category-title">{categoria}</h3>
                                <div className="skill-tags">
                                    {items.map((skill)=>(
                                        <span key={skill.id} className="skill-tag">{skill.nombre}
                                        <span className="skill-tag-level">{skill.nivel}</span>
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/*Cta Final*/}
            <section className="section-cta-final">
                <div className="container cta-content">
                    <h2>¿Trabajamos Juntos?</h2>
                    <p>
                       Estoy disponible para nuevos proyectos y desafios. Hablemos.
                    </p>
                    <Link to="/contact" className="btn btn-primary">
                    Contactame →
                    </Link>
            </div>
        </section>
    </div>
    );
}
export default About