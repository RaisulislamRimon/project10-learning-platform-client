import Main from "../../layout/Main";

const { createBrowserRouter } = require("react-router-dom");

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

export default routes;
