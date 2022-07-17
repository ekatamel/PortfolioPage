import Project from "./Project";
import projects from "../../data/projects";
import { useState } from "react";
// import MyCarousel from "./MyCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    CarouselControl,
    Carousel,
    CarouselItem,
    CarouselIndicators,
} from "reactstrap";

function Portfolio() {
    const portfolio = projects.map((project, i) => {
        return (
            <Project
                key={i}
                title={project.name}
                desc={project.description}
                stack={project.tech_stack}
                url={project.page_url}
                source={project.source_code}
                img={project.project_img}
                nameColor={project.name_color}
                gradient={project.gradient_color}
                wip={project.status}
            />
        );
    });

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const itemLength = portfolio.length - 1;

    const previousButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? itemLength : activeIndex - 1;
        setActiveIndex(nextIndex);
    };

    const nextButton = () => {
        if (animating) return;
        const nextIndex = activeIndex === itemLength ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const carouselItemData = portfolio.map((project, i) => {
        return (
            <CarouselItem
                key={i}
                onExited={() => setAnimating(false)}
                onExiting={() => setAnimating(true)}
            >
                <img src={project.props.img} alt={project.props.title} />
                <div className="carousel-buttons">
                    {project.props.url && (
                        <a
                            href={project.props.url}
                            target="_blank"
                            className="carousel-button"
                        >
                            Visit website
                        </a>
                    )}

                    <a
                        href={project.props.source}
                        target="_blank"
                        className="carousel-button"
                    >
                        View source code
                    </a>
                </div>
            </CarouselItem>
        );
    });

    return (
        <section id="portfolio" className="portfolio">
            <h4 className="portfolio__title portfolio__title--black title">
                PORTFOLIO PROJECTS
            </h4>
            <p className="portfolio__intro">
                Below you can find my recent works, which demonstrate my skills
                I was able to learn so far. Feel free to visit these websites or
                view my source code published in GitHub. Did you find any
                possible imporvements? Feel free to contact me!
            </p>
            <div className="portfolio__container">{portfolio}</div>
            <div className="portfolio__carousel">
                <Carousel
                    previous={previousButton}
                    next={nextButton}
                    activeIndex={activeIndex}
                    interval={null}
                >
                    <CarouselIndicators
                        items={portfolio}
                        activeIndex={activeIndex}
                        onClickHandler={(newIndex) => {
                            if (animating) return;
                            setActiveIndex(newIndex);
                        }}
                    />
                    {carouselItemData}
                    <CarouselControl
                        directionText="Prev"
                        direction="prev"
                        onClickHandler={previousButton}
                    />
                    <CarouselControl
                        // directionText="Next"
                        direction="next"
                        onClickHandler={nextButton}
                    />
                </Carousel>
            </div>
        </section>
    );
}

export default Portfolio;
