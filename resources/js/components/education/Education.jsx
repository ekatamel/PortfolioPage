import education from "../../data/education";
import Organization from "./Organization";
import Tab from "./Tab";

// import { useState } from "react";

function Education() {
    const showContent = (e) => {
        const clickedSection = e.currentTarget;

        const sections = document.querySelectorAll(".education__course");
        Array.from(sections).forEach((section) => {
            section.classList.remove("active");
        });
        clickedSection.classList.add("active");

        // Adjusting tab links for large devices

        index = Array.from(sections).indexOf(clickedSection);

        const tabLinks = Array.from(
            document.querySelectorAll(".education__link")
        );

        tabLinks.forEach((tab) => {
            tab.classList.remove("active");
        });

        tabLinks[index].classList.add("active");
    };

    let index = null;

    const makeActive = (e) => {
        const clickedTab = e.currentTarget;
        const tabLinks = document.querySelectorAll(".education__link");
        const courseSections = document.querySelectorAll(".education__course");

        // setIndex(Array.from(tabLinks).indexOf(clickedTab));
        index = Array.from(tabLinks).indexOf(clickedTab);

        tabLinks.forEach((tab) => {
            tab.classList.remove("active");
        });

        courseSections.forEach((section) => {
            section.classList.remove("active");
        });

        clickedTab.classList.add("active");
        courseSections[index].classList.add("active");
    };

    const tabs = education.map((e, i) => {
        if (i === 0) {
            return (
                <Tab
                    key={i}
                    src={e.logo}
                    alt={e.organization}
                    className="education__link active"
                    onClick={makeActive}
                />
            );
        } else {
            return (
                <Tab
                    key={i}
                    src={e.logo}
                    alt={e.organization}
                    className="education__link"
                    onClick={makeActive}
                />
            );
        }
    });

    const courses = education.map((e, i) => {
        if (i === 0) {
            return (
                <Organization
                    key={i}
                    index={i}
                    className="active education__course"
                    title={e.organization}
                    logoSmall={e.logo_small}
                    onClick={showContent}
                />
            );
        } else {
            return (
                <Organization
                    key={i}
                    index={i}
                    className="education__course"
                    title={e.organization}
                    logoSmall={e.logo_small}
                    onClick={showContent}
                />
            );
        }
    });

    return (
        <section id="education" className="education">
            <h4 className="education__title education__title--black title">
                RELEVANT EDUCATION
            </h4>

            <article className="tabbed-content tabs-side education__container">
                <nav className="tabs education__nav">
                    <ul className="education__organizations">{tabs}</ul>
                </nav>
                {courses}
            </article>
        </section>
    );
}

export default Education;
