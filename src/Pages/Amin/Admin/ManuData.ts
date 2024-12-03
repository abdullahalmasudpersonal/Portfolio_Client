/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  DashboardOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

interface MenuItem {
  key: string;
  title: string;
  path: string;
}

interface MenuData {
  key: string;
  title: string;
  icon: React.ComponentType<any>;
  items: MenuItem[];
}

const menuData: MenuData[] = [
  {
    key: "dashboard",
    title: "Dashboard",
    icon: DashboardOutlined,
    items: [
      { key: "main", title: "Main", path: "/admin/" },
      { key: "rtl", title: "RTL", path: "/admin/" },
      { key: "horizontal", title: "Horizontal", path: "/admin/" },
      { key: "ecommerce", title: "Ecommerce", path: "/admin/" },
      { key: "blog", title: "Blog", path: "/admin/" },
    ],
  },
  {
    key: "projects",
    title: "Projects",
    icon: AppstoreOutlined,
    items: [
      {
        key: "project-list",
        title: "Project List",
        path: "/admin/project-list",
      },
      {
        key: "create-project",
        title: "Create Project",
        path: "/admin/create-project",
      },
      {
        key: "create-project",
        title: "Update Project Index",
        path: "/admin/dnd-update-project",
      },
    ],
  },
  {
    key: "skills",
    title: "Skills",
    icon: SettingOutlined,
    items: [
      { key: "skills-list", title: "Skill List", path: "/admin/skill-list" },
      {
        key: "skill-create",
        title: "Create Skill",
        path: "/admin/create-skill",
      },
    ],
  },
  {
    key: "blogs",
    title: "Blogs",
    icon: SettingOutlined,
    items: [
      { key: "blog-list", title: "List", path: "/admin/list-blogs" },
      { key: "create-blog", title: "Create Blog", path: "/admin/create-blog" },
    ],
  },
];

export default menuData;
export type { MenuData, MenuItem };
