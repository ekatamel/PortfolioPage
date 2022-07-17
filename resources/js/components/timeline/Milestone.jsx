function Milestone(props) {
    return (
        <>
            <div className={props.className}>
                <div className="timeline__content">
                    <p className="timeline__date">{props.date}</p>
                    <h3 className="timeline__position">{props.position}</h3>
                    <p
                        className="timeline__text"
                        dangerouslySetInnerHTML={{ __html: props.text }}
                    ></p>
                </div>

                <div
                    className="timeline__img"
                    style={{
                        backgroundImage: `url(${props.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                ></div>
            </div>
        </>
    );
}

export default Milestone;
