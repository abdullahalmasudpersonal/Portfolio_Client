const AllBlogs = () => {
  return (
    <div
      className="allblogs-bg"
      style={{ paddingTop: "130px", paddingBottom: "70px" }}
    >
      <div className="container">
        <div
          className="row row-cols-1 row-cols-md-3 g-4"
          style={{ paddingBottom: "100px" }}
        >
          {/* {blogs?.data?.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
