import Project from "@/components/ui/projects/Project";
import { useGetAllProjectQuery } from "../../redux/features/project/projectApi";
import { TProject } from "../../types/project.types";
import { Col, Row } from "antd";

const AllProjects = () => {
  const { data: projects } = useGetAllProjectQuery({});

  return (
    <div style={{ paddingTop: "130px",minHeight:"calc(100vh - 200px)", paddingBottom: "70px", color: 'white', background: "linear-gradient(to right, #001233, #032057, #002363, #001131)" }}>
      <div className="customContainer">
        <Row gutter={[16, 16]}>
          {projects?.data?.map((project: TProject) => (
            <Col sm={24} md={12} lg={8}>
              <Project key={project._id} {...project} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllProjects;
