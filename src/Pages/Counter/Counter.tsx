import { useEffect } from "react";
import "./Counter.css";
import CountUp from "react-countup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAward,
  faCode,
  faFileAlt,
  faGear,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";

const Counter = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="counter-bg">
      <div className="container pt-5">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 numbers-numbers-headline"
        >
          NUMBERS
        </h3>

        <div className="card-group pt-5 justify-content-center">
          <div
            data-aos="zoom-in-up"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="" style={{ padding: "60px 110px" }}>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  className=""
                  style={{
                    backgroundColor: "white",
                    color: "rgb(44, 128, 238)",
                    padding: "14.6px 12.5px",
                    fontSize: "20px",
                    borderRadius: "50%",
                    border: "4px solid gray",
                  }}
                  icon={faCode}
                />
              </div>
              <h1 className="fw-bold text-center mt-3 mb-0">
                0<CountUp end={2} />
                <span></span>
              </h1>
              <h5 className="mt-3">Language</h5>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="" style={{ padding: "60px 110px" }}>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  className=""
                  style={{
                    backgroundColor: "white",
                    color: "rgb(44, 128, 238)",
                    padding: "13.5px 13.5px",
                    fontSize: "24px",
                    borderRadius: "50%",
                    border: "4px solid gray",
                  }}
                  icon={faGear}
                />
              </div>
              <h1 className="fw-bold text-center mt-3 mb-0">
                0<CountUp end={3} />
                <span></span>
              </h1>
              <h5 className="mt-3">Fremwork</h5>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="" style={{ padding: "60px 110px" }}>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  className=""
                  style={{
                    backgroundColor: "white",
                    color: "rgb(44, 128, 238)",
                    padding: "12.5px 15.5px",
                    fontSize: "24px",
                    borderRadius: "50%",
                    border: "4px solid gray",
                  }}
                  icon={faFileAlt}
                />
              </div>
              <h1 className="fw-bold text-center mt-3 mb-0">
                <CountUp end={10} />
                <span>+</span>
              </h1>
              <h5 className="mt-3">Projects</h5>
            </div>
          </div>
          <div
            data-aos="zoom-in-up"
            className="d-flex justify-content-center align-items-center"
          >
            <div className="" style={{ padding: "60px 110px" }}>
              <div className="d-flex justify-content-center align-items-center">
                <FontAwesomeIcon
                  className=""
                  style={{
                    backgroundColor: "white",
                    color: "rgb(44, 128, 238)",
                    padding: "10px 14px",
                    fontSize: "28px",
                    borderRadius: "50%",
                    border: "4px solid gray",
                  }}
                  icon={faAward}
                />
              </div>
              <h1 className="fw-bold text-center mt-3 mb-0">
                0<CountUp end={2} />
                <span></span>
              </h1>
              <h5 className="mt-3">Certificate</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
