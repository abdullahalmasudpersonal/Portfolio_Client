import { Route, Routes } from "react-router-dom";

//////////////// ant design & react-quill css /////////////////////////////
import "antd/dist/reset.css";
import "react-quill/dist/quill.snow.css";
import { RouteType } from "./types/routes.types";
import routes from "./Routes/routes";

//////////////// ant design & react-quill css /////////////////////////////

//////////// Aos ///////////////////
import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

function App() {
    useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

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
