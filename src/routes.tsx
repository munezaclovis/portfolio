import { RouteObject } from "react-router-dom";
import Layout from "./layout/layout";
import Home from "./pages/home";
import Project from "./pages/project";
import Experience from "./pages/experience";

const Routes: RouteObject[] = [
    {
        path: "",
        element: <Layout />,
        children: [
            { path: "", element: <Home /> },
            { path: "experience/:experienceName", element: <Experience /> },
            { path: "projects/:projectName", element: <Project /> },
            { path: "*", element: <Home /> },
        ],
    },
];

export default Routes;
