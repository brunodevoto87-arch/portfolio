import {useState} from "react"

function Contact(){
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        mensaje: "",
    })
    const [submmited, setSubmmited] = useState(false);
    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        setSubmmited(true);
        setFormData({nombre: "", email: "", mensaje: ""});
        setTimeout(()=>setSubmmited(false), 5000);
    }

    return(
        <div className="contact-page">
            {/*Hero*/}
            <section className="page-hero">
                <div className="container">
                    <h1>Contacto</h1>
                    <p>¿Tenes un proyecto en mente? Hablemos.</p>
                </div>
            </section>
            {/*Contenido*/}
            <section className="section-contact">
                <div className="container contact-grid">
                    {/*Formulario*/}
                    <div className="contact-form-wrapper">
                        <h2>Mandame un mensaje</h2>
                        {submmited && (
                            <div className="form-success">
                                ¡Gracias por escribir! Te respondo  a la brevedad.
                            </div>
                        )}
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input 
                                type="text" 
                                id="nombre"
                                name="nombre"
                                value={formData.nombre}
                                onChange={handleChange}
                                placeholder="Tu nombre"
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input 
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="tu@email.com"
                                required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="mensaje">Mensaje</label>
                                <textarea  
                                id="mensaje"
                                name="mensaje"
                                value={formData.mensaje}
                                onChange={handleChange}
                                placeholder="Contame sobre tu proyecto..."
                                rows="5"
                                required
                                />              
                            </div>
                            <button 
                            type="submit" className="btn btn-primary">Enviar Mensaje</button>
                        </form>
                        {/*Info Lateral*/}
                        <div className="contact-info">
                            <h2>O contactame directo</h2>
                            <div className="contact-links">
                                <a href="mailto:brunodevoto87@gmail.com" className="contact-link">
                                    <span className="contact-link-label">Email</span>
                                    <span className="contact-link-value">brunodevoto87@gmail.com
                                    </span>
                                </a>
                                <a href="https://github.com/brunodevoto87-arch"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="contact-link">
                                    <span className="contact-link-label">GitHub</span>
                                    <span className="contact-link-value">@brunodevoto87-arch</span>
                                </a>
                            </div>
                            <div className="contact-note">
                                <p>
                                    Respondo en menos de 24hs. Si es urgente, mejor escribime directo al email.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
export default Contact