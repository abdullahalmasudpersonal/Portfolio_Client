import { Layout } from "antd";
import { Content } from "antd/es/layout/layout";
import { Outlet } from "react-router-dom";


const AuthLayout = () => {
    return (
         <Layout>
            <Content>
                <Outlet />
            </Content>
        </Layout>
    );
};

export default AuthLayout;