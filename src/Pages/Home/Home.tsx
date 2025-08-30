import { useEffect, useState } from "react";
import "./Home.css";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import MovingComponent from "react-moving-text";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Counter from "./Counter/Counter";
import Skills from "./Skills/Skills";
import Resume from "../About/Resume/Resume";
import ConnectUs from "../ConnectUs/ConnectUs";
import HProjects from "../HProjects/HProjects";
import Blogs from "../Blogs/Blogs";
import About from "./About/About";

const Home = () => {
  const [, /* visitorCount */ setVisitorCount] = useState(0);

  useEffect(() => {
    const updateVisitorCount = async () => {
      try {
        const response = await fetch("https://portfolio-server-omega-coral.vercel.app/api/visitor", {
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

  const socialMedia = [
    { id: 1, iconName: 'fab fa-linkedin-in', href: 'https://www.linkedin.com/in/abdullahalmasud0', class: '', },
    { id: 2, iconName: 'fab fa-github', href: 'https://github.com/abdullahalmasudpersonal', class: '', },
    { id: 3, iconName: 'fab fa-stack-overflow', href: 'https://stackoverflow.com/users/19008268/abdullah-al-masud', class: '', },
    { id: 4, iconName: 'fab fa-facebook-f', href: 'https://www.facebook.com/abdullahalmasud772', class: 'facebook-padding', },
    { id: 5, iconName: 'fab fa-twitter', href: 'https://twitter.com/Abdulla14032407', class: '', },
  ]

  return (
    <>
      <div id="home" className="home-bg">
        <div className="homeDiv">
          <div className="headlineNameDiv">
            <h4 data-aos="fade-down" className="display-3 headlineName" style={{ fontFamily: 'serif', margin: 0 }}>Abdullah Al Masud</h4>
            <h4 data-aos="fade-down" className="display-3 " style={{ fontFamily: 'serif', margin: 0 }}>Abdullah Al Masud</h4>
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
            type="fadeIn"
            duration="2000ms"
            delay="1s"
            direction="normal"
            timing="ease-in-out"
            iteration="1"
            fillMode="both"
          >
            <section className="homeSocialIcon" style={{ margin: '20px 0' }}>
              {
                socialMedia.map((item) => (
                  <a style={{ marginRight: '10px' }}
                    className={`btn btn-outline-light btn-floating ${item.class}`}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    role="button"
                  >
                    <i className={item.iconName}></i>
                  </a>
                ))
              }
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
            <section className="resumeIconAnimation" style={{ marginTop: '5px' }}>
              <Link to="https://drive.google.com/file/d/1LSXebQDEwTsL5Wq2nT8fHRON9x_7awxv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <button
                  className="resume-download-btn btn btn-outline-light btn-floating fw-bold"
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
        <Counter />
        <Skills />
        {/* <Counter />
        <Resume />
        <Skills />
        <HProjects />
        <Blogs />
        <ConnectUs /> */}
      </div>
    </>
  );
};

export default Home;
