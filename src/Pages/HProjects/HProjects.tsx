import { useEffect } from "react";
import "./HProjects.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import Project from "../AllProjects/Project";
import { Link } from "react-router-dom";
import Aos from "aos";
import { useGetAllProjectQuery } from "../../redux/features/project/projectApi";
import { TProject } from "../../types/project.types";
library.add(fab);

const HProjects = () => {
  const { data: projectData } = useGetAllProjectQuery({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div id="projects" className="project-bg">
      <div className="container pt-3">
        <h3
          data-aos="flip-up"
          className="text-center pt-5 mt-5 about-about-headline"
        >
          PROJECTS
        </h3>
        <p data-aos="zoom-in" className="text-center mt-5 pt-3 pb-5">
          Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
          aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
          quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
          fugiat sit in iste officiis commodi quidem hic quas.
        </p>

        <div className="row row-cols-1 row-cols-md-3 g-4 project-dev-bg">
          {projectData?.data?.slice(0, 3).map((project: TProject) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
        <div data-aos="zoom-in-right" className="blogs-see-all-btn mt-3">
          <Link to="/allprojects">
            <button>See All Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HProjects;
