import { useEffect, useState } from "react";
import "./Home.css";
import "../../App.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MovingComponent from "react-moving-text";
// import "animation";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import Skills from "../Skills/Skills";
import Resume from "../About/Resume/Resume";
import ConnectUs from "../ConnectUs/ConnectUs";
import HProjects from "../HProjects/HProjects";
import Blogs from "../Blogs/Blogs";
import About from "../About/About";
import MyParticles from "./ParticlesContainer";

const Home = () => {
  const [, /* visitorCount */ setVisitorCount] = useState(0);

  useEffect(() => {
    // ভিজিটর কাউন্ট আপডেট করার জন্য API কল
    const updateVisitorCount = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/visitor", {
          method: "POST",
        });
        const data = await response.json();
        setVisitorCount(data.count);
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    updateVisitorCount();
  }, []);

  const resumeLink =
    "https://drive.google.com/uc?export=download&id=1LSXebQDEwTsL5Wq2nT8fHRON9x_7awxv";
  const [text] = useTypewriter({
    words: [
      "Developer",
      "React Developer",
      "Font End Developer",
      "Back End Developer",
      "Full Stack Developer",
    ],
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div>
      <div id="home" className="home-bg">
        <div className="container">
          <div data-aos="fade-down" className="myNameDiv">
            <h3 className="display-3 home-my-name ">Abdullah Al Masud</h3>
            <h3 data-aos="fade-down" className="display-3 home-my-name ">
              Abdullah Al Masud
            </h3>
          </div>

          <MovingComponent
            type="fadeInFromLeft"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
          >
            <h3 className="home-my-title">
              I&apos;m <span style={{ fontWeight: "bold" }}>{text}</span>
              <Cursor />
            </h3>
          </MovingComponent>

          <MovingComponent
            type="fadeInFromRight"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
          >
            <section className="mt-3 homeSocialIcon">
              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://www.linkedin.com/in/abdullahalmasud0"
                target="_blank"
                rel="noreferrer"
                role="button"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://github.com/abdullahalmasudpersonal"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://stackoverflow.com/users/19008268/abdullah-al-masud"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-stack-overflow"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1 facebook-padding"
                href="https://www.facebook.com/abdullahal.masud.5891"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://twitter.com/Abdulla14032407"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-twitter"></i>
              </a>

              <a
                className="btn btn-outline-light btn-floating m-1"
                href="https://dribbble.com/Abdullah540"
                role="button"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </section>
          </MovingComponent>

          <MovingComponent
            type="fadeInFromBottom"
            duration="2000ms"
            delay="0s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
          >
            <section className="resumeIconAnimation">
              <Link download="Abdullah Al Masud Resume" to={resumeLink}>
                {" "}
                <button
                  className="resume-download-btn btn btn-outline-light btn-floating fw-bold mt-4"
                  type="button"
                >
                  Resume &nbsp;
                  <FontAwesomeIcon className="" icon={faDownload} />
                </button>{" "}
              </Link>
            </section>
          </MovingComponent>
        </div>
      </div>

      <div className="home-down-bg">
        <About />
        <MyParticles />
        <Counter />
        <Skills />
        <Resume />
        <HProjects />
        <Blogs />
        <ConnectUs />
      </div>
    </div>
  );
};

export default Home;
