// import phone from "/public_html/img/icons/phone-call.png";
import phone from "../../../public_html/img/icons/phone-call.png";
import emaillogo from "../../../public_html/img/icons/email.png";
import profile from "../../../public_html/img/icons/profile.png";
import linkedin from "../../../public_html/img/icons/linkedin2.png";
import github from "../../../public_html/img/icons/github.png";
// import cv from "../data/CV_Melnichuk.pdf";
import axios from "axios";
import { useState, usePage } from "react";
import { Alert } from "reactstrap";

function About() {
    const [errorName, setErrorName] = useState(null);
    const [errorEmail, setErrorEmail] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);
    const [success, setSuccess] = useState(null);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const handleSumbit = (e) => {
        setErrorName(null);
        setErrorEmail(null);
        setErrorMessage(null);
        e.preventDefault();

        const sendData = async () => {
            try {
                const response = await axios({
                    url: "/",
                    method: "post",
                    data: {
                        name: name,
                        email: email,
                        message: message,
                    },
                });

                setSuccess("Thank you for your message!");
                setName("");
                setEmail("");
                setMessage("");

                setTimeout(() => {
                    setSuccess(null);
                }, 3000);
            } catch (error) {
                if (error.response.data.errors.name) {
                    setErrorName(error.response.data.errors.name);
                }

                if (error.response.data.errors.email) {
                    setErrorEmail(error.response.data.errors.email);
                }

                if (error.response.data.errors.message) {
                    setErrorMessage(error.response.data.errors.message);
                }
            }
        };
        sendData();
    };

    return (
        <section className="about" id="contact">
            <h4 className="title about__title about__title--blue">
                GET IN TOUCH
            </h4>
            <div className="about__container">
                <div className="about__info">
                    <p className="about__text">
                        For any questions, suggestions or job opportunities,
                        feel free to contact me via email or contact form to the
                        right. I am looking forward to collaborating with you!
                    </p>
                    <div className="about__contacts">
                        <p className="about__phone">
                            <img className="about__icon" src={phone} alt="" />
                            +420 775 992 148
                        </p>
                        <p className="about__email">
                            <img
                                className="about__icon"
                                src={emaillogo}
                                alt=""
                            />
                            <a href="mailto: eka.melnichuk@gmail.com">
                                eka.melnichuk@gmail.com
                            </a>
                        </p>
                        <p className="about__profile">
                            <img
                                className="about__icon"
                                src={profile}
                                alt="Profile"
                            />
                            <a
                                className="about__resume"
                                href="/download/CV_Melnichuk.pdf"
                                // target="_blank"
                                // download
                            >
                                download CV
                            </a>
                        </p>
                        <p className="about__linkedin">
                            <img
                                className="about__icon"
                                src={linkedin}
                                alt=""
                            />
                            <a
                                target="_blank"
                                className="about__linkedinurl"
                                href="https://www.linkedin.com/in/ekaterinamelnichuk/"
                            >
                                linkedin.com/in/ekaterinamelnichuk/
                            </a>
                        </p>
                        <p className="about__github">
                            <img className="about__icon" src={github} alt="" />
                            <a
                                target="_blank"
                                className="about__githuburl"
                                href="https://github.com/ekatamel"
                            >
                                github.com/ekatamel
                            </a>
                        </p>
                    </div>
                </div>

                <div className="about__form">
                    {success && <Alert>{success}</Alert>}
                    <h5 className="about__headline">CONTACT ME</h5>

                    <form
                        action="/"
                        className="about__inputs"
                        method="post"
                        onSubmit={handleSumbit}
                    >
                        <label className="about__label" htmlFor="name">
                            <input
                                className="about__input"
                                id="name"
                                type="text"
                                name="name"
                                value={name}
                                onChange={(e) => {
                                    setName(e.target.value);
                                }}
                                placeholder="Your name..."
                            />
                            {errorName &&
                                errorName.map((e, i) => {
                                    return (
                                        <p key={i} className="about__error">
                                            {e}
                                        </p>
                                    );
                                })}
                        </label>
                        <label className="about__label" htmlFor="email">
                            <input
                                className="about__input"
                                id="email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                }}
                                placeholder="Your email..."
                            />
                            {errorEmail &&
                                errorEmail.map((e, i) => {
                                    return (
                                        <p key={i} className="about__error">
                                            {e}
                                        </p>
                                    );
                                })}
                        </label>
                        <label className="about__label" htmlFor="message">
                            <textarea
                                className="about__input"
                                name="message"
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                }}
                                placeholder="Your message..."
                            ></textarea>
                            {errorMessage &&
                                errorMessage.map((e, i) => {
                                    return (
                                        <p key={i} className="about__error">
                                            {e}
                                        </p>
                                    );
                                })}
                        </label>
                        <button className="about__button">
                            Send a message
                        </button>
                    </form>
                </div>

                {/* <p className="about__question">Would you like to ask a question?</p>
        <p className="about__question">
          Would you like to find out more about me?
        </p>
        <div className="about__buttons">
          <a href="" className="about__button">
            Download my CV
          </a>
          <a href="" className="about__button">
            about me
          </a>
        </div>
        <div className="about__abouts">
          <p className="about__phone">
            <img className="about__icon" src={phone} alt="" />
            +420 775 992 148
          </p>
          <p className="about__email">
            <img className="about__icon" src={email} alt="" />
            katerinka.melnichuk@gmail.com
          </p>
        </div>
        <div className="about__social"></div> */}
            </div>
        </section>
    );
}

export default About;
