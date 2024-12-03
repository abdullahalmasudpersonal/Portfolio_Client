import { useEffect, useState } from "react";
import Blog from "./Blog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://portfolio-server-omega-coral.vercel.app/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

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
          {blogs?.data?.map((blog) => (
            <Blog key={blog._id} blog={blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
