import timeline from "../../data/timeline";
import Milestone from "./Milestone";

function Timeline() {
    const timelineMilestones = timeline.map((e, i) => {
        if (i === 0) {
            return (
                <Milestone
                    key={i}
                    date={e.timeline_date}
                    position={e.timeline_position}
                    text={e.timeline_text}
                    img={e.timeline_img}
                    className="timeline__desc timeline__desc--active"
                />
            );
        } else {
            return (
                <Milestone
                    key={i}
                    date={e.timeline_date}
                    position={e.timeline_position}
                    text={e.timeline_text}
                    img={e.timeline_img}
                    className="timeline__desc"
                />
            );
        }
    });

    const handleDateClick = (e) => {
        const dateItems = Array.from(e.target.parentElement.children);

        dateItems.forEach((el) => {
            el.classList.remove("timeline__item--active");
        });
        e.target.classList.add("timeline__item--active");

        const index = dateItems.indexOf(e.target);

        const timelineTexts = Array.from(
            document.querySelector(".timeline__info").children
        );

        timelineTexts.forEach((element) => {
            element.classList.remove("timeline__desc--active");
        });

        timelineTexts[index].classList.add("timeline__desc--active");
    };

    return (
        <section id="timeline" className="timeline">
            <h2 className="timeline__title title">PROFESSIONAL TIMELINE</h2>
            <div className="timeline__container">
                <ul className="timeline__list">
                    <li
                        className="timeline__item timeline__item--active"
                        onClick={handleDateClick}
                    >
                        03/2019
                    </li>
                    <li className="timeline__item" onClick={handleDateClick}>
                        11/2019
                    </li>
                    <li className="timeline__item" onClick={handleDateClick}>
                        03/2020
                    </li>
                    <li className="timeline__item" onClick={handleDateClick}>
                        02/2021
                    </li>
                    <li className="timeline__item" onClick={handleDateClick}>
                        03/2022
                    </li>
                    <li className="timeline__item" onClick={handleDateClick}>
                        now
                    </li>
                </ul>
                <div className="timeline__info">{timelineMilestones}</div>
            </div>
        </section>
    );
}

export default Timeline;
