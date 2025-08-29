import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import profileImg from "@/Assets/img/Profile/abdullah_al_masud_img.jpg";
import "./About.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Col, Row } from "antd";
library.add(fab);


const About = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);


  return (
    <div id="about" style={{ color: 'white', padding: '60px 0' }} className="customContainer">
      <h3 data-aos="flip-right" className="about-about-headline">ABOUT</h3>
      <p className="about-about-info" data-aos="fade-right" >
        The goal of my life as a career is to become a high quality web
        developer. At this early stage of my career, my goal is to work in a
        web development company in Bangladesh. One of the goals of my life is
        to take my skills and qualifications to a unique level by acquiring
        knowledge about different types of technology by spending extra time
        besides work.
      </p>
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={7} className="text-center">
          <img
            data-aos="fade-up-right"
            src={profileImg}
            alt="Abdullah Al Masud"
            style={{ width: "100%", borderRadius: "4px" }}
          />
        </Col>
        <Col xs={24} lg={17} style={{ color: 'white' }}>
          <h4 data-aos="fade-up-right" style={{ marginBottom: '5px' }}>
            Full Stack Developer & Web Desiginer
          </h4>
          <p data-aos="fade-up-right" className="pt-2">
            Looking for a strong web developer position in a dynamic and
            progressive company where my multitasking skills and ability to
            meet deadlines effectively will be fully utilized.
          </p>
          <Row gutter={[16, 16]} data-aos="fade-down" >
            <Col xs={24} sm={12}>
              <ul style={{ listStyleType: "none" }}>
                <li style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &nbsp;
                  <strong>Birthday:</strong> <span> July 2000</span>
                </li>
                <li style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>Website:&nbsp;</strong>
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
                <li style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>Phone:</strong> <span>+880 1726457771</span>
                </li>
                <li style={{ paddingTop: "20px" }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>City:</strong> <span>Dhaka, Bangladesh</span>
                </li>
              </ul>
            </Col>
            <Col xs={24} sm={12}>
              <ul style={{ listStyleType: "none" }}>
                <li style={{ paddingTop: '20px' }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &nbsp;
                  <strong>Age:</strong> <span>25 Years</span>
                </li>
                <li style={{ paddingTop: '20px' }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>Degree:</strong> <span>Honors (4th Year Runnig)</span>
                </li>
                <li style={{ paddingTop: '20px' }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>Email:&nbsp;</strong>
                  <span>abdullahalmasud772@gmail.com</span>
                </li>
                <li style={{ paddingTop: '20px' }}>
                  <FontAwesomeIcon icon={faChevronRight} /> &#160;
                  <strong>Freelance:</strong> <span>Available</span>
                </li>
              </ul>
            </Col>
          </Row>
          <p data-aos="fade-down" className="pt-20">
            I am looking for clear role and set of responsibilities.
            Consistent feedback from management. Team members I can learn
            from. A company with a good growth trajectory. Learn new things
            and develop my skills. Challenging problems to work on. A
            diverse team.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
