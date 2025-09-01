import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import { useGetAllProjectQuery } from "../../../redux/features/project/projectApi";
import { TProject } from "../../../types/project.types";
import { Button, Col, Row } from "antd";
import Project from "@/components/ui/projects/Project";
library.add(fab);

const Projects = () => {
  const { data: projectData } = useGetAllProjectQuery({});

  return (
    <div id="projects" className="customContainer" style={{ padding: '60px 0', color: 'white' }}>
      <h3 data-aos="flip-up" className="globalSectionHeadline" >PROJECTS</h3>
      <p data-aos="fade-down-right" style={{ margin: 'auto', maxWidth: '1180px', textAlign: 'center', padding: '20px 0 40px' }}>
        Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex
        aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos
        quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia
        fugiat sit in iste officiis commodi quidem hic quas.
      </p>
      <Row gutter={[16, 16]} >
        {projectData?.data?.slice(0, 3).map((project: TProject) => (
          <Col sm={24} md={12} lg={8} key={project?._id} data-aos="fade-up" >
           <Project key={project._id} {...project} /> 
          </Col>
        ))}
      </Row>
      <div style={{ marginTop: "20px", display: "flex", justifyContent: "flex-end" }}>
        <Link to="/all-project">
          <Button style={{background:'#014688ff', color:'white'}}>See All Project</Button>
        </Link>
      </div>

    </div>
  );
};

export default Projects;
