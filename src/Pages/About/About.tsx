import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import { fab } from '@fortawesome/free-brands-svg-icons'; */
import { useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "../../Assets/img/Profile/profile-img.jpg";
import "./About.css";
//import MovingComponent from "react-moving-text";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
// import "animation";
import Aos from "aos";
import "aos/dist/aos.css";
library.add(fab);

const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="about" className="about-bg">
      <div className="container pt-3">
        <h3
          data-aos="flip-right"
          className="text-center pt-5 about-about-headline"
        >
          ABOUT
        </h3>

        <p
          className="about-about-info pt-5 m-0"
          style={{ textAlign: "center" }}
          data-aos="fade-right"
        >
          The goal of my life as a career is to become a high quality web
          developer. At this early stage of my career, my goal is to work in a
          web development company in Bangladesh. One of the goals of my life is
          to take my skills and qualifications to a unique level by acquiring
          knowledge about different types of technology by spending extra time
          besides work.
        </p>

        <div className="row">
          <div className="col-md-4 mt-3">
            <img
              data-aos="fade-up-right"
              className="img-fluid rounded mx-auto"
              src={profileImg}
              alt="Abullah al masud"
            />
          </div>
          <div className="col-md-8 mt-3">
            <div className="">
              <h4 data-aos="fade-up-right">
                Full Stack Developer & Web Desiginer
              </h4>
              <p data-aos="fade-up-right" className="pt-2">
                Looking for a strong web developer position in a dynamic and
                progressive company where my multitasking skills and ability to
                meet deadlines effectively will be fully utilized.
              </p>
              <div className="row">
                <div data-aos="fade-down" className="col-sm-6">
                  <div className="">
                    <ul className="ps-0" style={{ listStyleType: "none" }}>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &nbsp;{" "}
                        <strong>Birthday:</strong> <span> July 2000</span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>Website:</strong>{" "}
                        <span>
                          <Link
                            className="text-decoration-none text-white"
                            to="https://abdullahalmasud.netlify.app/"
                            target="_blank"
                          >
                            abdullahalmasud.netlify.app
                          </Link>
                        </span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>Phone:</strong> <span>+880 1726457771</span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>City:</strong> <span>Dhaka, Bangladesh</span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div data-aos="fade-down" className="col-sm-6">
                  <div className="">
                    <ul className="ps-0" style={{ listStyleType: "none" }}>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &nbsp;{" "}
                        <strong>Age:</strong> <span>24 Years</span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>Degree:</strong> <span>Honors (Runnig)</span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>Email:</strong>{" "}
                        <span>abdullahalmasud772@gmail.com</span>
                      </li>
                      <li className="mt-3">
                        {" "}
                        <FontAwesomeIcon icon={faChevronRight} /> &#160;{" "}
                        <strong>Freelance:</strong> <span>Available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <p data-aos="fade-down" className="pt-2">
                I am looking for clear role and set of responsibilities.
                Consistent feedback from management. Team members I can learn
                from. A company with a good growth trajectory. Learn new things
                and develop my skills. Challenging problems to work on. A
                diverse team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
