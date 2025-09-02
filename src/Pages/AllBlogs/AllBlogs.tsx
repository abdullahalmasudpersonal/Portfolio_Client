import Blog from "@/components/ui/blogs/Blog";
import { Col, Row } from "antd";
import { useGetBlogsQuery } from "@/redux/features/blog/BlogApi";
import { TBlog } from "@/types/blog.types";

const AllBlogs = () => {
  const { data: blogs } = useGetBlogsQuery({});
  return (
    <div style={{ paddingTop: "130px", paddingBottom: "70px", minHeight: "calc(100vh - 200px)", color: 'white', background: "linear-gradient(to right, #001233, #032057, #002363, #001131)" }} >
      <div className="customContainer">
        <Row gutter={[16, 16]}>
          {blogs?.data?.map((blog: TBlog) => (
            <Col sm={24} md={12} lg={8}>
              <Blog key={blog._id} {...blog} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default AllBlogs;
