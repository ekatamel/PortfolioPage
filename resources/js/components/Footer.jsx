function Footer() {
    return (
        <footer className="footer">
            <div className="footer__container">
                <a
                    className="footer__logo"
                    href="https://www.linkedin.com/in/ekaterinamelnichuk/"
                    target="_blank"
                >
                    {/* <img
                        src="img/icons/linkedin-white.png"
                        alt="LinkedIn logo"
                    /> */}
                </a>

                <a
                    className="footer__logo"
                    href="https://github.com/ekatamel"
                    target="_blank"
                >
                    {/* <img src="img/icons/github-white.png" alt="LinkedIn logo" /> */}
                </a>
            </div>

            <p className="footer__copyright">
                Copyright &copy; &nbsp; Ekaterina Melnichuk 2022
            </p>
        </footer>
    );
}

export default Footer;
