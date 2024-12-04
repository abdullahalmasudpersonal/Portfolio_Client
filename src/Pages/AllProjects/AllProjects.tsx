import "./Project.css";

const AllProjects = () => {
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
          {/* {projects?.data?.map((project) => (
            <Project key={project._id} project={project} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;
