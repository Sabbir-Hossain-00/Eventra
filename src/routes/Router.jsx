import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { PrivateRoute } from "../Route/PrivateRoute";
import { CreateEvent } from "../pages/Create-Event/CreateEvent";
import { UpcomingEvents } from "../pages/Upcoming-Events/UpcomingEvents";
import { EventDetails } from "../pages/Event-Details/EventDetails";
import { ManageEvents } from "../pages/Manage-Events/ManageEvents";
import { UpdateGroup } from "../pages/Update-Group/UpdateGroup";
import { JoinedEvent } from "../pages/Joined-Event/JoinedEvent";
import { Error } from "../pages/Error/Error";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement:<Error/>,
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
            },
            {
                path:"/upcoming-events",
                loader:()=>fetch("https://eventra-server.vercel.app/upcomingEvents"),
                element:<UpcomingEvents/>
            },
            {
                path:"/event-details/:id",
                element:<PrivateRoute><EventDetails/></PrivateRoute>
            },
            {
                path:"/manage-events",
                element:<PrivateRoute><ManageEvents/></PrivateRoute>
            },
            {
                path:"/updategroup/:id",
                element:<PrivateRoute><UpdateGroup/></PrivateRoute>
            },
            {
                path:"/joined-events",
                element:<PrivateRoute><JoinedEvent/></PrivateRoute>
            }
        ]
    }
])