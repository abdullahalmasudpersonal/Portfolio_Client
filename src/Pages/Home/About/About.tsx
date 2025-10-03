import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import profileImg from "@/Assets/img/Profile/abdullah_al_masud_img.jpg";
import "./About.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import "aos/dist/aos.css";
import { Col, Row } from "antd";
library.add(fab);


const About = () => {

  return (
    <div id="about" style={{ color: 'white', padding: '60px 0' }} className="customContainer">
      <h3 data-aos="flip-right" className="globalSectionHeadline">ABOUT</h3>
      <p className="about-about-info" data-aos="fade-right" >
        I am a passionate Full Stack Developer with experience in designing and developing responsive, user-friendly web applications using modern technologies such as React, Next.js, Node.js, Express, and MongoDB. I enjoy solving complex problems, optimizing performance, and creating scalable solutions that provide meaningful user experiences. Continuously learning and exploring new tools, frameworks, and best practices, I strive to deliver high-quality code and contribute effectively to any project. Dedicated, detail-oriented, and highly motivated, I aim to grow as a developer while making a positive impact through technology.
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
            Aspiring Full Stack Developer seeking an opportunity in a growth-oriented organization to apply expertise in front-end and back-end web development. Passionate about building scalable, user-friendly applications, eager to learn modern technologies, and contribute to the organization’s success.
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
            I am a Full Stack Developer skilled in building responsive and user-friendly web applications using React, Next.js, Node.js, and MongoDB. Passionate about learning new technologies and solving real-world problems, I focus on delivering high-quality, efficient, and scalable solutions.
          </p>
        </Col>
      </Row>
    </div>
  );
};

export default About;
