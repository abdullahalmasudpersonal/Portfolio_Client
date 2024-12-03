import { useEffect } from "react";
import "./Skills.css";
import Aos from "aos";
import { useGetSkillsQuery } from "../../redux/features/skills/skillsApis";
import { TSkill } from "../../types/skill.types";

const Skills = () => {
  const { data: skillData } = useGetSkillsQuery({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="skills" className="counter-bg">
      <div className="container pt-3">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 mb-5 numbers-numbers-headline"
        >
          CORE SKILLS
        </h3>

        <div className="skills-icon pt-5">
          {skillData?.data?.map((item: TSkill) => (
            <div
              key={item?._id}
              data-toggle="tooltip"
              data-placement="right"
              title={item?.title?.toUpperCase()}
              data-aos="fade-right"
              className="skills-skills-img"
            >
              <img className="" src={item?.image} alt="Card image cap" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
