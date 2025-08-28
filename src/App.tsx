// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.min";
import { Route, Routes } from "react-router-dom";
/* slick-carousel */
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

//////////////// ant design & react-quill css /////////////////////////////
import "antd/dist/reset.css";
import "react-quill/dist/quill.snow.css";
import { RouteType } from "./types/routes.types";
import routes from "./Routes/routes";

//////////////// ant design & react-quill css /////////////////////////////

function App() {
  const renderRoutes = (routes: RouteType[]) =>
    routes.map(({ path, index, element, children }, i) => {
      if (index) {
        return (
          <Route key={i} index element={element} />
        );
      }
      return (
        <Route key={i} path={path} element={element}>
          {children ? renderRoutes(children) : null}
        </Route>
      );
    });

  return (
    <>
      <Routes>{renderRoutes(routes)}</Routes>
    </>
  );
}

export default App;
