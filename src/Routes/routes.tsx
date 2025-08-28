import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import CommonLayout from "@/layout/CommonLayout";
import AllBlogs from "@/Pages/AllBlogs/AllBlogs";
import AllProjects from "@/Pages/AllProjects/AllProjects";
import Admin from "@/Pages/Amin/Admin/Admin";
import CreateBlog from "@/Pages/Amin/CreateBlog/CreateBlog";
import Login from "@/Pages/Amin/Login/Login";
import CreateProject from "@/Pages/Amin/Projects/createProject/CreateProject";
import DnDUpdateProject from "@/Pages/Amin/Projects/DnDUpdateProject/DnDUpdateProject";
import ListProject from "@/Pages/Amin/Projects/listProject/ListProject";
import UpdateProject from "@/Pages/Amin/Projects/updateProject/UpdateProject";
import CreateSkills from "@/Pages/Amin/skills/CreateSkills/CreateSkills";
import DndUpdateSkill from "@/Pages/Amin/skills/DndUpdateSkill/DndUpdateSkill";
import ListSkills from "@/Pages/Amin/skills/listSkills/ListSkills";
import Home from "@/Pages/Home/Home";
import ProjectDetails from "@/Pages/ProjectDetails/ProjectDetails";
import { RouteType } from "@/types/routes.types";



const routes: RouteType[] = [
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'all-projects', element: <AllProjects /> },
      { path: 'projects/:id', element: <ProjectDetails /> },
      { path: 'all-blog', element: <AllBlogs /> },
    ]
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <Login /> },
    ]
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { index: true, element: <Admin /> },
      { path: "project-list", element: <ListProject /> },
      { path: "create-project", element: <CreateProject /> },
      { path: "update-project/:projectId", element: <UpdateProject /> },
      { path: "dnd-update-project", element: <DnDUpdateProject /> },
      { path: "skill-list", element: <ListSkills /> },
      { path: "create-skill", element: <CreateSkills /> },
      { path: "dnd-update-skill", element: <DndUpdateSkill /> },
      { path: "create-blog", element: <CreateBlog /> },
    ]
  }
];

export default routes;
