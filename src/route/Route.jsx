import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../mainLayout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Rooms from "../pages/rooms/Rooms";
import MyBookings from "../pages/bookings/MyBookings";
import RoomDetail from "../pages/roomDetail/RoomDetail";
import Register from "../pages/signup/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../pages/errorpage/ErrorPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/rooms",
        element: <Rooms></Rooms>,
      },
      {
        path: "/mybookings",
        element:<PrivateRoute> <MyBookings></MyBookings></PrivateRoute>,
      },  {
        path: "/rooms/:id",
        element:<PrivateRoute><RoomDetail></RoomDetail></PrivateRoute>,
         loader: ({params})=> fetch(`https://hotel-booking-server-side-eight.vercel.app/rooms/${params.id}`)
       // loader: ({params})=> fetch(`http://localhost:5000/rooms/${params.id}`)
      }
      ]
    },
  ]);
  export default router;

  