function Project(props) {
    // const showContent = (event) => {
    //   console.log(event.target.children.);
    //   // const text = document.querySelector(".portfolio__description");
    //   // text.style.display = "block";
    // };

    // const stopPropagation = (event) => {
    //   event.stopPropagation();
    // };

    return (
        <div
            className="portfolio__project"
            style={{
                backgroundImage: `url(${props.img})`,
            }}
        >
            <div className="portfolio__info">
                <p
                    className="portfolio__name"
                    style={{
                        color: `${props.nameColor}`,
                        background: `linear-gradient(to right, rgba(255, 255, 255, 0.823), ${props.gradient})`,
                    }}
                >
                    {props.title}
                </p>
                <p className="portfolio__description">
                    <span className="portfolio__stack--bold">About: </span>
                    {props.desc}
                </p>
                <p className="portfolio__stack">
                    <span className="portfolio__stack--bold">Tech stack: </span>
                    {props.stack}
                </p>
                <div className="portfolio__buttons">
                    {props.url && (
                        <a
                            href={props.url}
                            target="_blank"
                            className="portfolio__url portfolio__url--left"
                            style={{
                                color: `white`,
                                backgroundColor: `${props.nameColor}`,
                                border: `2px solid ${props.nameColor}`,
                            }}
                        >
                            Visit website
                        </a>
                    )}

                    <a
                        href={props.source}
                        target="_blank"
                        // rel="noreferrer"
                        className="portfolio__url portfolio__url--right"
                        style={{
                            color: `${props.nameColor}`,
                            backgroundColor: `white`,
                            border: `2px solid ${props.nameColor}`,
                        }}
                    >
                        View source
                    </a>
                </div>
            </div>
            {props.wip && (
                <img className="portfolio__wip" src={props.wip} alt="" />
            )}
        </div>
    );
}

export default Project;
