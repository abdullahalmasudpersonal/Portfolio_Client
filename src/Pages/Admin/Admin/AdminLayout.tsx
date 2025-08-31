import { useDispatch } from "react-redux";
import "./Admin.css";
import { Link, Outlet } from "react-router-dom";
import { logout } from "../../../redux/features/auth/authSlice";
import { Menu } from "antd";
import menuData, { MenuData } from "./ManuData";
import { createElement } from "react";

const { SubMenu } = Menu;

const AdminLayout = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <>
      <div
        className="sticky-top"
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          color: "white",
          height: "60px",
          backgroundColor: "rgb(12, 20, 84)",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          <h4>Home</h4>
        </Link>
        <h4>Admin Dashboard</h4>
      </div>
      <div className="px-0">
        <div className="dashboard">
          {/*  <div className="dashboard-dev1">
              <Link to="/admin-dashboard">
                <button>Dashboard</button>
              </Link>
              <Link to="/admin-dashboard/projects">
                <button>Project</button>
              </Link>
              <Link to="/admin-dashboard/projects/create-project">
                <button>Create Project</button>
              </Link>
              <Link to="/admin-dashboard/create-blog">
                <button>Create Blog</button>
              </Link>
              <Link to="/admin-dashboard/list-skill">
                <button>List Skills</button>
              </Link>
              <Link to="/admin-dashboard/create-skill">
                <button>Create Skill</button>
              </Link>
              <button onClick={handleLogout}>Logout</button>
            </div> */}
          <div className="dashboard-dev1">
            <Menu mode="inline" defaultOpenKeys={[]}>
              {menuData.map((menu: MenuData) => (
                <SubMenu
                  key={menu.key}
                  icon={createElement(menu.icon)}
                  title={menu.title}
                >
                  {menu.items.map((item) => (
                    <Menu.Item key={item.key}>
                      <Link style={{ textDecoration: "none" }} to={item.path}>
                        {item.title}
                      </Link>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ))}
            </Menu>
            <button onClick={handleLogout}>Logout</button>
          </div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AdminLayout;
