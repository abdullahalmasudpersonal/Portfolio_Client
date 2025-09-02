import AdminLayout from "@/layout/AdminLayout";
import AuthLayout from "@/layout/AuthLayout";
import CommonLayout from "@/layout/CommonLayout";
import AllBlogs from "@/Pages/AllBlogs/AllBlogs";
import AllProjects from "@/Pages/AllProjects/AllProjects";
import Admin from "@/Pages/Admin/Admin/Admin";
// import CreateBlog from "@/Pages/Admin/CreateBlog/CreateBlog";
import Login from "@/Pages/Admin/Login/Login";
import CreateProject from "@/Pages/Admin/Projects/createProject/CreateProject";
import DnDUpdateProject from "@/Pages/Admin/Projects/DnDUpdateProject/DnDUpdateProject";
import ListProject from "@/Pages/Admin/Projects/listProject/ListProject";
import UpdateProject from "@/Pages/Admin/Projects/updateProject/UpdateProject";
import CreateSkills from "@/Pages/Admin/skills/CreateSkills/CreateSkills";
import DndUpdateSkill from "@/Pages/Admin/skills/DndUpdateSkill/DndUpdateSkill";
import ListSkills from "@/Pages/Admin/skills/listSkills/ListSkills";
import Home from "@/Pages/Home/Home";
import ProjectDetails from "@/Pages/ProjectDetails/ProjectDetails";
import { RouteType } from "@/types/routes.types";
import BlogDetails from "@/Pages/BlogDetails/BlogDetails";
import BlogList from "@/Pages/Admin/blogs/blogList/BlogList";
import CreateBlog from "@/Pages/Admin/blogs/createBlog/CreateBlog";
import UpdateBlog from "@/Pages/Admin/blogs/updateBlog/UpdateBlog";


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
      { path: "project-list", element: <ListProject /> },
      { path: "create-project", element: <CreateProject /> },
      { path: "update-project/:projectId", element: <UpdateProject /> },
      { path: "dnd-update-project", element: <DnDUpdateProject /> },
      { path: "skill-list", element: <ListSkills /> },
      { path: "create-skill", element: <CreateSkills /> },
      { path: "dnd-update-skill", element: <DndUpdateSkill /> },
      // //////////////// Blogs //////////////////////////////
      { path: "blog-list", element: <BlogList /> },
      { path: "blog-create", element: <CreateBlog /> },
      { path: "blog-update/:blogId", element: <UpdateBlog /> },
    ]
  }
];

export default routes;
