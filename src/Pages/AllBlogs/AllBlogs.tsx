import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { TBlog } from "../../types/blogs.types";
import Blog from "./Blog";

const AllBlogs = () => {
  const { data: blogs } = useGetBlogsQuery({});
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
          {blogs?.data?.map((blog: TBlog) => (
            <Blog key={blog._id} {...blog} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllBlogs;
