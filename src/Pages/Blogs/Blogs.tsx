import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import Aos from "aos";
import Blog from "../AllBlogs/Blog";
import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { TBlog } from "../../types/blogs.types";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="blogs" className="blogs-bg">
      <div className="pt-3">
        <h3
          data-aos="fade-down"
          className="text-center pt-5 mt-5 mb-5 numbers-numbers-headline"
        >
          BLOGS
        </h3>
        <div className="container mt-5 pt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {blogs?.data?.slice(0, 3).map((blog: TBlog) => (
              <Blog {...blog} />
            ))}
          </div>
          <div data-aos="fade-up-right" className="blogs-see-all-btn">
            <Link to="/allblogs">
              <button>See All Blogs</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
