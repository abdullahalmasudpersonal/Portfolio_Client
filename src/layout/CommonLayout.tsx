import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";
import Footer from "@/components/navigation/footer/Footer";
import Navber from "@/components/navigation/navber/Navber";


const CommonLayout = () => {
    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Navber />
            <Content>
                <Outlet />
            </Content>
            <Footer />
        </Layout>
    );
};

export default CommonLayout;