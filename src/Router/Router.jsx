import {Outlet, createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Favorites from "../Pages/Favorites/Favorites";
import Login from "../Pages/Login/Login";
import Phone from "../Pages/Phone/Phone";
import ErrorPage from "../pages/ErrorPage/ErrorPage";


const myCreatedRoute = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[{
            path:'/',
            element:<Home></Home>,
            loader : ()=> fetch('/phones.json'),
           },
           {
            path : "/favorites",
            element : <Favorites></Favorites>
        },
           {
            path : "/login",
            element : <Login></Login>
        },
        {
            path:"/phones/:id",
            element :<Phone></Phone>,
            loader : () => fetch('/phones.json')
        }
    
    
    
    ]
    }
])


export default myCreatedRoute;