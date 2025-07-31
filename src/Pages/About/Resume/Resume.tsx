import { useEffect } from "react";
import "./Resume.css";
import Aos from "aos";

const Resume = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="resume" className="resume-bg">
      <div className="container pt-3">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 mt-5 mb-5 numbers-numbers-headline"
        >
          RESUME
        </h3>

        <div className="row mt-5">
          <div className="col-sm-6 mt-4">
            <div data-aos="zoom-in-right" className="">
              <h3 className="mb-4">Summary</h3>
              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">Abdullah Al Masud</h5>
                <p>
                  <em>
                    To be an expect employee and intend to work in a challenging
                    and competitive Environment in an organizational position
                    entrusted with higher responsibility and strategies decision
                    making authority, motivated self-driven creative.
                  </em>
                </p>
                <ul>
                  <li>+8801726457771</li>
                  <li>abdullahalmasud772@gmail.com</li>
                  <li>Jatrabari Dhaka - 1204</li>
                </ul>
              </div>
            </div>

            <div data-aos="zoom-in-right" className="">
              <h3 className="mb-4">Education</h3>

              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">Al Quran & Islamc Studies</h5>
                <h5 className="my-3">2021 - 2025 (4th Year Running)</h5>
                <p>
                  <em>Islamic Arabic University, Mohammadpur, Dhaka</em>{" "}
                </p>
                <p>
                  To be an expect employee and intend to work in a challenging
                  and competitive Environment in an organizational position
                  entrusted with higher responsibility and strategies decision
                  making authority, motivated self-driven creative.
                </p>
              </div>

              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">
                  Higher Secondary School Certificate / Equivalent{" "}
                </h5>
                <h5 className="my-3">2018 - 2019 ( 2020 - Improvment )</h5>
                <p>
                  <em>Tamirul Millat Kamil Madrasah</em>
                </p>
                <p>
                  <em>
                    To be an expect employee and intend to work in a challenging
                    and competitive Environment in an organizational position
                    entrusted with higher responsibility and strategies decision
                    making authority, motivated self-driven creative.
                  </em>
                </p>
              </div>
            </div>
          </div>

          <div data-aos="zoom-in-right" className="col-sm-6 mt-4">
            <div className="">
              <h3 className="mb-4">Professional Training</h3>

              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">Next Label Web Development</h5>
                <h5 className="my-3">Nov 2023 - May 2024</h5>
                <p>
                  <em>
                    Programming Hero, Level-4, 34, Awal Centre, Banani, Dhaka
                  </em>{" "}
                </p>
                <p>
                  To be an expect employee and intend to work in a challenging
                  and competitive Environment in an organizational position
                  entrusted with higher responsibility and strategies decision
                  making authority, motivated self-driven creative.
                </p>
              </div>

              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">
                  Complete Web Development Course with Jhankar Mahbub
                </h5>
                <h5 className="my-3">Jan 2022 - Jun 2022</h5>
                <p>
                  <em>
                    Programming Hero, Level-4, 34, Awal Centre, Banani, Dhaka
                  </em>{" "}
                </p>
                <p>
                  To be an expect employee and intend to work in a challenging
                  and competitive Environment in an organizational position
                  entrusted with higher responsibility and strategies decision
                  making authority, motivated self-driven creative.
                </p>
              </div>

              <div data-aos="zoom-in-right" className="resume-item">
                <h5 className="text-uppercase">
                  Certificate in National Skill Standard Basic Course
                  Examination
                </h5>
                <h5 className="my-3">Jul 2015 - Dec 2015</h5>
                <p>
                  <em>Shafique Computer Training Center, Pirojpur</em>
                </p>
                <p>
                  <em>Bangladesh Technical Education Board – 2015</em>
                </p>
                <p>
                  <em>
                    To be an expect employee and intend to work in a challenging
                    and competitive Environment in an organizational position
                    entrusted with higher responsibility and strategies decision
                    making authority, motivated self-driven creative.
                  </em>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
