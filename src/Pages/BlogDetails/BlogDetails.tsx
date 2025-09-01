import { CalendarOutlined } from "@ant-design/icons";
import { Avatar, Col, Image, Row, Typography } from "antd";


const BlogDetails = () => {
    return (
        <div style={{ background: "linear-gradient(to right, #001233, #032057, #002363, #001131)", minHeight: 'calc(100vh - 202px)', paddingTop: '120px', paddingBottom:"50px", color: 'white' }}>
            <div className="customContainer">
                <Typography style={{ textAlign: 'center', color: 'white', fontSize: 'clamp(32px, 9vw, 60px)', fontWeight: '700' }}>CSS</Typography>

                <Row>
                    <Col xs={24} lg={24} style={{ margin: 'auto' }}>
                        <Image  width={'100%'} preview={false} src="https://i.ibb.co/ZgGpTRh/tailwindcss.png" alt="blog Image" style={{ paddingTop: '50px',maxHeight:'500px' }} />
                    </Col>
                    <Col lg={18} style={{ margin: 'auto' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: "20px", padding:'50px 0 10px 0' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: "5px" }}>
                                <Avatar src={"https://i.ibb.co/ZgGpTRh/tailwindcss.png"} />
                                <Typography style={{ color: 'white', fontWeight:'bold' }}>Abdullah Al Masud</Typography>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: "8px" }}>
                                <CalendarOutlined style={{fontSize:'18px'}} />
                                <Typography style={{ color: 'white',fontWeight:'bold' }}>24 Noverber, 2021</Typography>
                            </div>
                        </div>
                        <Typography style={{color:'white', fontWeight:'800',maxWidth:'900px', fontSize:'clamp(18px, 4vw, 25px)', paddingBottom:'20px', lineHeight:'32px'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, eos quam aspernatur quis consectetur magnam.</Typography>
                        <Typography style={{color:'white', textAlign:'justify', fontSize:'16px', }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, provident ratione modi sint labore, eos minima nobis amet, officiis reiciendis ipsa nemo perspiciatis harum! Laboriosam odit facilis impedit debitis tempora. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus commodi expedita cupiditate, sunt repudiandae ipsum voluptas dolore, repellat iure vitae nesciunt deserunt ipsa facilis dolorem unde, dicta impedit itaque fugit! Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias ipsa saepe dolores eveniet harum culpa beatae maxime molestias, quibusdam deleniti reiciendis neque, commodi earum illo a doloremque perspiciatis quos.</Typography>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default BlogDetails;