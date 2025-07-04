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
import { JoinedEvent } from "../pages/Joined-Event/JoinedEvent";
import { Error } from "../pages/Error/Error";
import { UpdateEvent } from "../pages/Update-Event/UpdateEvent";
import { AllEvent } from "../pages/AllEvents/AllEvent";
import { AboutUs } from "../pages/About-Us/AboutUs";

export const router = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout/>,
        errorElement:<Error/>,
        children:[
            {
                path: "/",
                element:<Home/>,
                loader:()=>fetch("https://eventra-server.vercel.app/upcomingEvents"),
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
                path:"/about-us",
                element:<AboutUs/>
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
                path:"/all-events",
                loader:()=>fetch("https://eventra-server.vercel.app/allEvents"),
                element:<AllEvent/>
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
                element:<PrivateRoute><UpdateEvent/></PrivateRoute>
            },
            {
                path:"/joined-events",
                element:<PrivateRoute><JoinedEvent/></PrivateRoute>
            }
        ]
    }
])