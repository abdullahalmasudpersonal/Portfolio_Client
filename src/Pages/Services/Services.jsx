import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import "./Services.css";
import Aos from "aos";

const Services = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="services" className="services-bg">
      <div className="container pt-3 services-dev-bg">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 mt-5 mb-5 numbers-numbers-headline"
        >
          PACKAGE
        </h3>
        <div data-aos="fade-right" className="row">
          <div data-aos="fade-right" className="col-md-3 mt-5">
            <div className="py-4 package-bg">
              <h5 className="text-center">FRUNT END </h5>
              <h1 className="text-center">$ 500</h1>
              <h6 className="text-center">EVERY PROJECT</h6>
              <hr
                className="mx-4 "
                style={{ color: "white", border: "1px solid white" }}
              />
              <div className="package-details">
                <div>
                  <p className="m-2 ">
                    <FontAwesomeIcon icon={faChevronRight} /> HTML 5
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> CSS
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JavaScript
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> React
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Bootstrap
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Tailwind CSS
                  </p>
                  <p className="m-2 ">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> TypeScript
                  </p>
                </div>
              </div>
              <div className="package-btn-bg">
                <button className="package-btn">Get Package</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="col-md-3 mt-5">
            <div className="py-4 package-bg">
              <h5 className="text-center">BACK END </h5>
              <h1 className="text-center">$ 600</h1>
              <h6 className="text-center">EVERY PROJECT</h6>
              <hr
                className="mx-4 "
                style={{ color: "white", border: "1px solid white" }}
              />
              <div className="package-details">
                <div>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JavaScript
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> NodeJs
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Express
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JWT
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> MongoDB
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Mongoose
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Firebase{" "}
                  </p>
                </div>
              </div>
              <div className="package-btn-bg">
                <button className="package-btn">Get Package</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="col-md-3 mt-5">
            <div className="py-4 package-bg">
              <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-light text-black py-2 px-3">
                Recomended
              </span>
              <h5 className="text-center">MERN STACK </h5>
              <h1 className="text-center">$ 800</h1>
              <h6 className="text-center">EVERY PROJECT</h6>
              <hr
                className="mx-4 "
                style={{ color: "white", border: "1px solid white" }}
              />
              <div className="package-details">
                <div>
                  <p className="m-2">
                    <FontAwesomeIcon icon={faChevronRight} /> HTML 5
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> CSS / Fremwork
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> CSS{" "}
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JavaScript
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> React
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> NodeJs
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> MongoDB
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Firebase
                  </p>
                </div>
              </div>
              <div className="package-btn-bg">
                <button className="package-btn">Get Package</button>
              </div>
            </div>
          </div>
          <div data-aos="fade-right" className="col-md-3 mt-5">
            <div className="py-4 package-bg">
              <h5 className="text-center">FULL STACK </h5>
              <h1 className="text-center">$ 999</h1>
              <h6 className="text-center">EVERY PROJECT</h6>
              <hr
                className="mx-4 "
                style={{ color: "white", border: "1px solid white" }}
              />
              <div className="package-details">
                <div>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> HTML 5
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> CSS / Fremwork
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JavaScript
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> React
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> NodeJs
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> MongoDB
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> Firebase
                  </p>
                  <p className="m-2">
                    {" "}
                    <FontAwesomeIcon icon={faChevronRight} /> JWT
                  </p>
                </div>
              </div>
              <div className="package-btn-bg">
                <button className="package-btn">Get Package</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
