import { useEffect, useState } from "react";

function Navbar() {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener("resize", () => {
            setWidth(window.innerWidth);
        });
    }, []);

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <header className="navigation">
            <a
                onClick={(e) => {
                    e.preventDefault();
                    setIsNavOpen(!isNavOpen);
                }}
                className="navigation__link icon"
                href="#"
            >
                <i className="fa-solid fa-bars"></i>

                <i className="fa-thin fa-abacus"></i>
            </a>
            <nav className="navigation__top">
                <ul
                    className={
                        isNavOpen
                            ? width >= 769
                                ? "navigation__links"
                                : "navigation__links expanded"
                            : "navigation__links"
                    }
                >
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#about"
                        >
                            ABOUT
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#timeline"
                        >
                            TIMELINE
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#education"
                        >
                            EDUCATION
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#skills"
                        >
                            SKILLS
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#portfolio"
                        >
                            PORTFOLIO
                        </a>
                    </li>
                    <li className="navigation__item">
                        <a
                            onClick={closeNav}
                            className="navigation__link"
                            href="#contact"
                        >
                            CONTACT
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
