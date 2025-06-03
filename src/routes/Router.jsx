import { createBrowserRouter } from "react-router";
import { MainLayout } from "../layouts/MainLayout";
import { Home } from "../pages/home/Home";
import { Login } from "../pages/Login/Login";
import { Register } from "../pages/Register/Register";
import { PrivateRoute } from "../Route/PrivateRoute";
import { CreateEvent } from "../pages/Create-Event/CreateEvent";
import { UpcomingEvents } from "../pages/Upcoming-Events/UpcomingEvents";
import { EventDetails } from "../pages/Event-Details/EventDetails";

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
            },
            {
                path:"/upcoming-events",
                loader:()=>fetch("http://localhost:3000/upcomingEvents"),
                element:<UpcomingEvents/>
            },
            {
                path:"/event-details/:id",
                loader:({params})=> fetch(`http://localhost:3000/eventDetails/${params.id}`),
                element:<PrivateRoute><EventDetails/></PrivateRoute>
            }
        ]
    }
])