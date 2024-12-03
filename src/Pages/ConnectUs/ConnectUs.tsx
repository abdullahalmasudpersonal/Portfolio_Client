import { useEffect } from "react";
import "./ConnectUs.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faEnvelope,
  faMobileAndroidAlt,
} from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import ContactForm from "./ContactForm";
library.add(fab);

const ConnectUs = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="connect-us" className="connect-us pb-5">
      <div className="container pt-3">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 about-about-headline mb-5 mt-5"
        >
          CONNECT
        </h3>

        <div data-aos="fade-up" className="row pt-5">
          <div className="col-md-4 mb-5">
            <div className="">
              <div className="">
                <div className="d-flex align-items-center m-2 mb-3 addressIconAnimation">
                  <a
                    style={{ borderRadius: "50%", padding: "9px 15px" }}
                    className=" btn btn-outline-light btn-floating m-1 me-3"
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faLocationDot} />
                  </a>
                  <div>
                    <h5>Location</h5>
                    <p>Jatrabari, Dhaka. 1204</p>
                  </div>
                </div>

                <div className="d-flex align-items-center m-2 mb-3 addressIconAnimation">
                  <a
                    style={{ borderRadius: "50%", padding: "9px 13px" }}
                    className=" btn btn-outline-light btn-floating m-1 me-3"
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faEnvelope} />
                  </a>
                  <div>
                    <h5>Email</h5>
                    <p>abdullahalmasud772gmail.com</p>
                  </div>
                </div>

                <div className="d-flex align-items-center m-2 mb-3 addressIconAnimation">
                  <a
                    style={{ borderRadius: "50%", padding: "10px 15px" }}
                    className=" btn btn-outline-light btn-floating m-1 me-3"
                    href="#!"
                    role="button"
                  >
                    <FontAwesomeIcon icon={faMobileAndroidAlt} />
                  </a>
                  <div>
                    <h5>Phone</h5>
                    <p>+880 1726457771</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-8 mb-5">
            <div className="">
              <div className="">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectUs;
