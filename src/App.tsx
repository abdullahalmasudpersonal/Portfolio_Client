import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Header/Header";
import Footer from "./Pages/Shared/Footer/Footer";
import AllBlogs from "./Pages/AllBlogs/AllBlogs";
import AllProjects from "./Pages/AllProjects/AllProjects";
import ProjectDetails from "./Pages/ProjectDetails/ProjectDetails";
import Login from "./Pages/Amin/Login/Login";
import Admin from "./Pages/Amin/Admin/Admin";
import AdminLayout from "./Pages/Amin/Admin/AdminLayout";
import ProtectedRoute from "./Pages/Shared/ProtectedRoute";
import CreateBlog from "./Pages/Amin/CreateBlog/CreateBlog";
import CreateSkills from "./Pages/Amin/skills/CreateSkills/CreateSkills";
import ListSkills from "./Pages/Amin/skills/listSkills/ListSkills";
import ListProject from "./Pages/Amin/Projects/listProject/ListProject";
import UpdateProject from "./Pages/Amin/Projects/updateProject/UpdateProject";
import CreateProject from "./Pages/Amin/Projects/createProject/CreateProject";
/* slick-carousel */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

//////////////// ant design & react-quill css /////////////////////////////
import "antd/dist/reset.css";
import "react-quill/dist/quill.snow.css";
import DnDUpdateProject from "./Pages/Amin/Projects/DnDUpdateProject/DnDUpdateProject";
//////////////// ant design & react-quill css /////////////////////////////

function App() {
  const location = useLocation();
  const hideNavAndFooterPaths = ["/login", "/admin"];
  const shouldHideNavAndFooter = hideNavAndFooterPaths.some(
    (path) =>
      location.pathname === path || location.pathname.startsWith(`${path}/`)
  );
  return (
    <>
      {!shouldHideNavAndFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/allblogs" element={<AllBlogs />} />
        <Route path="/allprojects" element={<AllProjects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminLayout />
            </ProtectedRoute>
          }
        >
          <Route index element={<Admin />} />
          <Route path="project-list" element={<ListProject />} />
          <Route path="create-project" element={<CreateProject />} />
          <Route path="update-project/:projectId" element={<UpdateProject />} />
          <Route path="dnd-update-project" element={<DnDUpdateProject />} />
          <Route path="skill-list" element={<ListSkills />} />
          <Route path="create-skill" element={<CreateSkills />} />
          <Route path="create-blog" element={<CreateBlog />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
      {!shouldHideNavAndFooter && <Footer />}
    </>
  );
}

export default App;
