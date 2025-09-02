import { useGetSingleBlogQuery } from "@/redux/features/blogs/blogsApi";
import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Col, Image, Row, Typography } from "antd";
import { useParams } from "react-router-dom";
import Loader2 from "../Shared/loader/Loader2";
// import { useState } from "react";


const BlogDetails = () => {
    const { id: blogId } = useParams();
    const { data: blogDetails,isLoading } = useGetSingleBlogQuery(blogId);
    const { name, image, date, title, description } = blogDetails?.data || {};
    // const [isLoading, setIsLoading] = useState(true);

    return (
        <div style={{ background: "linear-gradient(to right, #001233, #032057, #002363, #001131)", minHeight: 'calc(100vh - 202px)', paddingTop: '120px', paddingBottom: "50px", color: 'white' }}>
            <div className="customContainer">
                {
                    isLoading ? <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 372px)', }}><Loader2 /></div> : <> <Typography style={{ textAlign: 'center', color: 'white', fontSize: 'clamp(32px, 9vw, 60px)', fontWeight: '700' }}>{name}</Typography>
                        <Row>
                            <Col xs={24} lg={24} style={{ margin: 'auto' }}>
                                <Image width={'100%'} preview={false} src={image} alt="blog Image" style={{ paddingTop: '50px', maxHeight: '500px' }} />
                            </Col>
                            <Col lg={18} style={{ margin: 'auto' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: "20px", padding: '50px 0 15px 0' }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: "8px" }}>
                                        <Avatar src={"https://i.ibb.co/ZgGpTRh/tailwindcss.png"} />
                                        <Typography style={{ color: 'white', fontWeight: 'bold' }}>Abdullah Al Masud</Typography>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: "8px" }}>
                                        <CalendarOutlined style={{ fontSize: '18px' }} />
                                        <Typography style={{ color: 'white', fontWeight: 'bold' }}>{date}</Typography>
                                    </div>
                                </div>
                                <Typography style={{ color: 'white', fontWeight: '800', maxWidth: '900px', fontSize: 'clamp(18px, 4vw, 25px)', paddingBottom: '20px', lineHeight: '32px' }}>{title}</Typography>
                                <div>{description}</div>
                            </Col>
                        </Row></>
                }
            </div>
        </div>
    );
};

export default BlogDetails;