import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Blogs.css";
import Aos from "aos";
import Blog from "../AllBlogs/Blog";
import { useGetBlogsQuery } from "../../redux/features/blogs/blogsApi";
import { TBlog } from "../../types/blogs.types";
import { Col, Row } from "antd";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery({});

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div id="blogs" className="customContainer" style={{ padding: '60px 0', color: 'white' }}>
      <h3 data-aos="fade-down" className="globalSectionHeadline" style={{ marginBottom: '70px' }}>
        BLOGS
      </h3>
      <Row gutter={[16, 16]}>
        {blogs?.data?.slice(0, 3).map((blog: TBlog) => (
          <Col sm={24} md={12} lg={8}>
            <Blog key={blog._id} {...blog} />
          </Col>
        ))}
      </Row>
       <div >
        <Link to="/allblogs">
          <button>See All Blogs</button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
