import { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import { Col, Row } from "antd";
import { TSkill } from "@/types/skill.types";
import { useGetSkillsQuery } from "@/redux/features/skills/skillsApis";

const Skills = () => {
  const { data: skillData } = useGetSkillsQuery({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  
  return (
    <div id="skills" className="customContainer" style={{ padding: '60px 0' }}>
      <h3 data-aos="flip-up" className="globalSectionHeadline" style={{ marginBottom: '70px' }}
      >CORE SKILLS </h3>

      <Row gutter={[16, 16]} >
        {
          skillData?.data?.map((item: TSkill) => (
            <Col xs={12} sm={8} md={6} lg={6} xl={4} key={item.title}  >
              <div data-aos="fade-right" title={item?.title} className="skillInfoDiv">
                <img src={item?.image} alt="Slill Icon" style={{ width: "100px", height: "100px", objectFit: "contain" }}  />
              <p style={{ margin: 0, paddingTop:'20px', fontWeight: 700,fontSize:'17px' }}>{item?.title}</p>
              </div>
            </Col>
          ))
        }
      </Row>
    </div>
  );
};

export default Skills;
