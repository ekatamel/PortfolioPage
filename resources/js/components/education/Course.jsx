function Course(props) {
    const skills = props.skills.map((skill, i) => {
        return (
            <li className="education__item" key={i}>
                {skill}
            </li>
        );
    });

    return (
        <div className="education__info">
            <a
                className="education__link"
                target="_blank"
                href={props.courseURL}
            >
                <h5 className="education__name">{props.name}</h5>
            </a>

            <p className="education__description">{props.desc}</p>

            <div className="education__results">
                <ul className="education__list">{skills}</ul>
                {props.certificateUrl && (
                    <a
                        className="education__certificate-url"
                        href={props.certificateUrl}
                        target="_blank"
                    >
                        <img
                            className="education__certificate-img"
                            src={props.certificateImg}
                        />
                    </a>
                )}
            </div>
        </div>
    );
}

export default Course;
