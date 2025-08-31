import Project from "@/components/ui/projects/Project";
import { useGetAllProjectQuery } from "../../redux/features/project/projectApi";
import { TProject } from "../../types/project.types";
import "./Project.css";

const AllProjects = () => {
  const { data: projects } = useGetAllProjectQuery({});

  return (
    <div
      className="allproject-bg "
      style={{ paddingTop: "130px", paddingBottom: "70px" }}
    >
      <div className="container">
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ paddingBottom: "100px" }}
        >
          {projects?.data?.map((project: TProject) => (
            <Project key={project._id} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
