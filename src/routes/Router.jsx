import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { PrivateRoute } from "../Route/PrivateRoute";
import { CreateEvent } from "../pages/Create-Event/CreateEvent";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        children:[
            {
                path: "/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            },
            {
                path:"/register",
                element:<Register/>
            },
            {
                path:"/create-event",
                element: <PrivateRoute><CreateEvent/></PrivateRoute>
            }
        ]
    }
])