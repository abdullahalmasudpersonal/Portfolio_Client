import { Link } from "react-router-dom";
import { Button, Col, Row } from "antd";
import Blog from "@/components/ui/blogs/Blog";
import { useGetBlogsQuery } from "@/redux/features/blogs/blogsApi";
import { TBlog } from "@/types/blogs.types";

const Blogs = () => {
  const { data: blogs } = useGetBlogsQuery({});

  return (
    <div id="blogs" className="customContainer" style={{ padding: '60px 0', color: 'white' }}>
      <h3 data-aos="fade-down" className="globalSectionHeadline" style={{ marginBottom: '70px' }}>
        BLOGS
      </h3>
      <Row gutter={[16, 16]}>
        {blogs?.data?.slice(0, 3).map((blog: TBlog) => (
          <Col sm={24} md={12} lg={8} key={blog?._id} data-aos="fade-up" data-aos-duration="3000">
            <Blog key={blog._id} {...blog} />
          </Col>
        ))}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'end', marginTop: '20px' }} >
        <Link to="/all-blog">
          <Button style={{background:'#014688ff', color:'white'}}>See All Blog</Button>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
