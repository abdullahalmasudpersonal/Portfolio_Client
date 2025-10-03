import "./Resume.css";
import { Col, Row } from "antd";

const Resume = () => {

  return (
    <div id="resume" className="customContainer" style={{ color: 'white', padding: '60px 0' }}>
      <h3 data-aos="flip-up" className="globalSectionHeadline" style={{ marginBottom: '70px' }}>RESUME</h3>
      <Row gutter={[16, 16]} style={{ padding: "0 10px" }}>
        <Col md={24} lg={12}>
          <div data-aos="zoom-in-right">
            <h3 className="mb-4">Summary</h3>
            <div data-aos="zoom-in-right" className="resume-item">
              <h5 className="text-uppercase">Abdullah Al Masud</h5>
              <p>
                <em>
                  Aspiring Full Stack Developer seeking an opportunity in a growth-oriented organization to apply expertise in front-end and back-end web development. Passionate about building scalable, user-friendly applications, eager to learn modern technologies, and contribute to the organization’s success.
                </em>
              </p>
              <ul>
                <li>+8801726457771</li>
                <li>abdullahalmasud772@gmail.com</li>
                <li>Jatrabari Dhaka - 1204</li>
              </ul>
            </div>
          </div>

          <div data-aos="zoom-in-right">
            <h3 className="mb-4">Education</h3>
            <div data-aos="zoom-in-right" className="resume-item">
              <h5 className="text-uppercase">Al Quran & Islamc Studies</h5>
              <h5 className="my-3">2021 - 2025 (4th Year Running)</h5>
              <p>
                <em>Islamic Arabic University, Mohammadpur, Dhaka</em>{" "}
              </p>
              <p>
                Al Quran & Islamic Studies is an academic program focused on in-depth understanding of the Quran, Hadith, and Islamic jurisprudence (Fiqh). The curriculum emphasizes proficiency in the Arabic language to comprehend classical texts, alongside studies in Islamic history, ethics, and contemporary issues. It develops analytical thinking, research skills, and a strong foundation in Islamic teachings, fostering both knowledge and moral values.
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
                  Completed the Higher Secondary School Certificate (Madrasah), gaining a comprehensive foundation in both general education and Islamic studies. The program emphasized academic excellence, critical thinking, and knowledge in subjects such as mathematics, science, languages, and religious studies, preparing for higher education and professional development.
                </em>
              </p>
            </div>
          </div>
        </Col>
        <Col md={24} lg={12}>
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
              Completed the Next Level Web Development course, focusing on advanced web development concepts including modern JavaScript, React.js, Next.js, Node.js, and database integration. Gained practical experience in building responsive, high-performance web applications, implementing front-end and back-end functionality, and deploying projects efficiently. Enhanced problem-solving skills and understanding of scalable, production-ready web development practices.
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
              Completed the Complete Web Development Course by Jhankar Mahbub, covering full-stack web development including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. Gained hands-on experience in building responsive, user-friendly websites and web applications, with a focus on front-end and back-end integration, database management, and deployment. Developed practical projects to strengthen problem-solving, coding efficiency, and modern web development skills.
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
                Completed the National Skill Standard Basic Course Examination, focusing on foundational skills and competencies aligned with national standards. The course enhanced practical knowledge, problem-solving abilities, and technical proficiency, providing a solid base for professional development and workplace readiness.
              </em>
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Resume;
