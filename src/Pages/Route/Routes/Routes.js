import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Blogs from "../../Blogs/Blogs";
import Contact from "../../Contact/Contact";
import AboutMe from "../../Home/AboutMe/AboutMe";
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
                path: '/aboutMe',
                element: <AboutMe></AboutMe>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
        ]
    }
])

export default routes;