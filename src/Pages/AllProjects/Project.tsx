import { faCircleInfo, faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./Project.css";
import Aos from "aos";
import { TProject } from "../../types/project.types";

const Project = (project: TProject) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const {
    _id,
    name,
    title,
    features,
    image,
    live_link,
    client_side_code,
    server_side_code,
  } = project;

  return (
    <div data-aos="zoom-in-right">
      <div className="project-dev-shadow">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            {image?.map((imgSrc, index) => (
              <div
                key={index}
                className={`carousel-item ${index === 0 ? "active" : ""}`}
              >
                <img
                  height="250px"
                  className="d-block w-100 rounded-top"
                  src={imgSrc}
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="projects-projects-dev">
          <h5 className="mt-3">
            <a
              href={live_link}
              rel="noreferrer"
              target="_blank"
              style={{ textDecoration: "none", color: "white" }}
            >
              {name}{" "}
              <FontAwesomeIcon icon={faEye} style={{ fontSize: "15px" }} />{" "}
            </a>
          </h5>
          <p>{title}</p>
          <div style={{fontSize:'13px'}} dangerouslySetInnerHTML={{ __html: features }} />
        </div>

        <div className="p-3 ">
          <small className="d-flex justify-content-end live_client_server_btn">
            <a href={`/projects/${_id}`} target="_blank">
              <button className="project-live-btn">
                <FontAwesomeIcon icon={faCircleInfo} /> Details
              </button>
            </a>
            <a href={client_side_code} target="_blank" rel="noreferrer">
              <button className="project-live-btn">
                <i className="fab fa-github"></i> Client
              </button>
            </a>
            <a href={server_side_code} target="_blank" rel="noreferrer">
              <button className="project-live-btn">
                <i className="fab fa-github"></i> Server
              </button>
            </a>
          </small>
        </div>
      </div>
    </div>
  );
};

export default Project;
