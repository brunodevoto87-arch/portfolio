function Footer(){
    const currentYear = new Date().getFullYear();
    return(
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                     © {currentYear} Bruno Devoto. Hecho con React. 
                </p>
                <div className="footer-links">
                    <a 
                    href="https://github.com/brunodevoto87-arch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                    aria-label="GitHub">
                        GitHub
                    </a>
                </div>
            </div> 
        </footer>
    )
}
export default Footer