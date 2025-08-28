import { useState } from "react";
import { Layout, Menu, Button, Drawer, Typography, Grid } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import './Navber.css'

const { Header } = Layout;
const { useBreakpoint } = Grid;

const Navber = () => {
    const screens = useBreakpoint();
    const [open, setOpen] = useState(false);

    const menuItems = [
        { key: "home", label: <a href="/#home">Home</a> },
        { key: "about", label: <a href="/#about">About</a> },
        { key: "resume", label: <a href="/#resume">Resume</a> },
        { key: "projects", label: <a href="/#projects">Projects</a> },
        { key: "skills", label: <a href="/#skills">Skills</a> },
        { key: "blogs", label: <a href="/#blogs">Blogs</a> },
        { key: "contact", label: <a href="/#contact">Connect Us</a> },
    ];
    return (
        <Header style={{ background: "transparent", padding: 0,position: "fixed",top: '20px', zIndex:100,left:0,right:0,  }}>
            <div className="antNavber">
                <Link to="/" style={{ textDecoration: 'none' }}>
                        <Typography className="portfolioTitle">Portfolio</Typography>
                    </Link>
                {screens.md ? (
                        <Menu style={{ backgroundColor: '#00000001' }} mode="horizontal" items={menuItems} />
                    ) : (
                        <>
                            <Button className="menuBtn"
                                type="text" style={{ color: 'white' }}
                                icon={<MenuOutlined />}
                                onClick={() => setOpen(true)}
                            />
                            <Drawer
                                title="Menu"
                                placement="right"
                                onClose={() => setOpen(false)}
                                open={open}
                            >
                                <Menu mode="vertical" items={menuItems} onClick={() => setOpen(false)} />
                            </Drawer>
                        </>
                    )}
            </div>
        </Header>
    );
};

export default Navber;

{/* <Link to="/" style={{ textDecoration: 'none' }}>
                <Typography className="portfolioTitle">Portfolio</Typography>
            </Link> */}
{/* {screens.md ? (
                <Menu style={{ backgroundColor: '#00000001' }} mode="horizontal" items={menuItems} />
            ) : (
                <>
                    <Button className="menuBtn"
                        type="text" style={{ color: 'white' }}
                        icon={<MenuOutlined />}
                        onClick={() => setOpen(true)}
                    />
                    <Drawer
                        title="Menu"
                        placement="right"
                        onClose={() => setOpen(false)}
                        open={open}
                    >
                        <Menu mode="vertical" items={menuItems} onClick={() => setOpen(false)} />
                    </Drawer>
                </>
            )} */}