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
        { key: "home", label: "Home", href: '/#home' },
        { key: "about", label: "About", href: '/#about' },
        { key: "resume", label: "Resume", href: '/#resume' },
        { key: "projects", label: "Projects", href: '/#projects' },
        { key: "skills", label: "Skills", href: '/#skills' },
        { key: "blogs", label: "Blogs", href: '/#blogs' },
        { key: "contact", label: "Contact", href: '/#connect-us' },
    ];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleMenuClick = (e:any) => {
        const clickedItem = menuItems.find((item) => item.key === e.key);
        if (clickedItem) {
            window.location.href = clickedItem.href; // ✅ সরাসরি URL এ যাবে
        }
        setOpen(false); // Drawer বন্ধ করবে
    };

    return (
        <Header style={{ background: "transparent", padding: 0, position: "fixed", top: '20px', zIndex: 100, left: 0, right: 0, }}>
            <div className="antNavber">
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <Typography className="portfolioTitle">Portfolio</Typography>
                </Link>
                {screens.lg ? (
                    <div>
                        {
                            menuItems.map((item) => <a key={item?.key} className="menuItem" href={item.href} >{item?.label}</a>)
                        }
                    </div>
                ) : (
                    <>
                        <Button className="menuBtn"
                            type="text" style={{ color: 'white' }}
                            icon={<MenuOutlined />}
                            onClick={() => setOpen(true)}
                        />

                        <Drawer style={{ background: "#001529", color: 'white' }}
                            title="Portfolio"
                            placement="right"
                            onClose={() => setOpen(false)}
                            open={open}
                        >
                            <Menu theme="dark" mode="vertical"
                                items={menuItems.map((item) => ({
                                    key: item.key,
                                    label: item.label,
                                }))}
                                onClick={handleMenuClick}
                            />
                        </Drawer>
                    </>
                )}
            </div>
        </Header>
    );
};

export default Navber;

