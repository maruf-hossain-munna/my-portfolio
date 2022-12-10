import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Contact from "../../Contact/Contact";
import Home from "../../Home/Home/Home";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
])

export default routes;