import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";


const AdminLayout = () => {
    return (
        <Layout>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default AdminLayout;