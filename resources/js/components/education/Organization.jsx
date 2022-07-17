import Course from "./Course";
import education from "../../data/education";

function Organization(props) {
  const coursesOrg = education[props.index].courses.map((e, i) => {
    return (
      <Course
        key={i}
        name={e.course_name}
        desc={e.description}
        skills={e.skills}
        date={e.date}
        courseURL={e.course_url}
        certificateImg={e.certificate_img}
        certificateUrl={e.certificate_url}
      />
    );
  });

  return (
    <>
      <section
        // id={"side_tab" + (props.index + 1)}
        className={props.className}
        onClick={props.onClick}
      >
        <div className="education__tab">
          <img
            className="education__logo--small"
            src={props.logoSmall}
            alt=""
          />
          {props.title}
        </div>

        <div className="education__info-container"> {coursesOrg}</div>
      </section>
    </>
  );
}

export default Organization;
