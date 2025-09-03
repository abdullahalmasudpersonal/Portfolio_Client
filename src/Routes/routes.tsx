import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import CommonLayout from "@/layout/CommonLayout";
import AllBlogs from "@/Pages/AllBlogs/AllBlogs";
import AllProjects from "@/Pages/AllProjects/AllProjects";
import Admin from "@/Pages/Admin/Admin/Admin";
import Login from "@/Pages/Login/Login";
import DndUpdateSkill from "@/Pages/Admin/skills/skillUpdateDnd/SkillUpdateDnd";
import Home from "@/Pages/Home/Home";
import ProjectDetails from "@/Pages/ProjectDetails/ProjectDetails";
import { RouteType } from "@/types/routes.types";
import BlogDetails from "@/Pages/BlogDetails/BlogDetails";
import BlogList from "@/Pages/Admin/blogs/blogList/BlogList";
import SkillList from "@/Pages/Admin/skills/skillList/SkillList";
import CreateSkill from "@/Pages/Admin/skills/skillCreate/SkillCreate";
import BlogCreate from "@/Pages/Admin/blogs/blogCreate/BlogCreate";
import BlogUpdate from "@/Pages/Admin/blogs/blogUpdate/BlogUpdate";
import ProjectList from "@/Pages/Admin/projects/projectList/ProjectList";
import ProjectCreate from "@/Pages/Admin/projects/projectCreate/ProjectCreate";
import ProjectUpdate from "@/Pages/Admin/projects/projectUpdate/ProjectUpdate";
import ProjectUpdateDnd from "@/Pages/Admin/projects/projectUpdateDnd/ProjectUpdateDnd";


const routes: RouteType[] = [
  {
    path: '/',
    element: <CommonLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: 'all-project', element: <AllProjects /> },
      { path: 'project/:id', element: <ProjectDetails /> },
      { path: 'all-blog', element: <AllBlogs /> },
      { path: 'blog/:id', element: <BlogDetails /> },
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
      /////////////////// Project ///////////////////////
      { path: "project-list", element: <ProjectList /> },
      { path: "project-create", element: <ProjectCreate /> },
      { path: "project-update/:projectId", element: <ProjectUpdate /> },
      { path: "project-update-dnd", element: <ProjectUpdateDnd /> },
      /////////////////// Skill /////////////////////////
      { path: "skill-list", element: <SkillList /> },
      { path: "skill-create", element: <CreateSkill /> },
      { path: "skill-update-dnd", element: <DndUpdateSkill /> },
      // //////////////// Blogs /////////////////////////
      { path: "blog-list", element: <BlogList /> },
      { path: "blog-create", element: <BlogCreate /> },
      { path: "blog-update/:blogId", element: <BlogUpdate /> },
    ]
  }
];

export default routes;
