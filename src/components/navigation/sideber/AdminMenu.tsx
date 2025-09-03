import { DashboardOutlined, SettingOutlined } from "@ant-design/icons";

export const adminMenus = [
  {
    key: "/admin",
    icon: <DashboardOutlined />,
    label: "Dashboard",
  },
  {
    key: "project",
    icon: <SettingOutlined />,
    label: "Project",
    children: [
      { key: "/admin/project-list", label: "List" },
      { key: "/admin/project-create", label: "Create" },
      { key: "/admin/project-update-dnd", label: "Update Serial" },
    ],
  },
  {
    key: "skill",
    icon: <SettingOutlined />,
    label: "Skill",
    children: [
      { key: "/admin/skill-list", label: "List" },
      { key: "/admin/skill-create", label: "Create" },
      { key: "/admin/skill-update-dnd", label: "Update Serial" },
    ],
  },
  {
    key: "blog",
    icon: <SettingOutlined />,
    label: "Blog",
    children: [
      { key: "/admin/blog-list", label: "List" },
      { key: "/admin/blog-create", label: "Create" },
    ],
  },
]