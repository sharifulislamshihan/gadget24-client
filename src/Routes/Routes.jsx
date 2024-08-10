import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import AllProduct from "../Pages/AllProduct/AllProduct";
import SingleProduct from "../Pages/SingleProduct/SingleProduct";
import { api } from "../Pages/Shared/SharedFetchApi";
import PrivateRoutes from "./PrivateRoutes";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UserProfile from "../Pages/UserProfile/UserProfile";
import Cart from "../Pages/Cart/Cart";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/products",
                element: <AllProduct></AllProduct>
            },
            {
                path: "/products/:id",
                element: <SingleProduct></SingleProduct>,
                loader: ({ params }) => fetch(` ${api}products/${params.id}`),
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/user",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/cart",
                element: <PrivateRoutes><Cart></Cart> </PrivateRoutes>
            },
            {
                path: "*",
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    // {
    //     path: 'dashboard',
    //     element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
    //     children: [
            
    //     ]
    // }
])