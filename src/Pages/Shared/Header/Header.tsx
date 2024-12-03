import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      data-aos="fade-down"
      className="container header-possition header-bg fixed-top active"
    >
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-dark">
          <Link to="/">
            <a className="navbar-brand navber-name" href="/#home">
              Portfolio
            </a>
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav mr-auto"></ul>
            <ul className="navbar-nav mr-auto">
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#home">
                  Home
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#about">
                  About
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#resume">
                  Resume
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#blogs">
                  Blogs
                </a>
              </li>
              <li className="nav-item fw-bold px-2">
                <a className="nav-link text-light" href="/#connect-us">
                  Connect Us
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
