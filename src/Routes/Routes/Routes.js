import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import DashboardLayout from "../../Pages/DashboardLayout";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/SignUp',
            element: <SignUp></SignUp>
          },
          {
            path: '/appoinment',
            element: <Appoinment></Appoinment>
          }

        ]
    }, 
    {
      path: '/dashboard',
      element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
      children: [
        {
          path: '/dashboard',
          element: <MyAppointment></MyAppointment>
        },
        {
          path: '/dashboard/allusers',
          element: <AdminRoute><AllUsers></AllUsers></AdminRoute> 
        },
        {
          path: '/dashboard/adddoctor',
          element: <AdminRoute><AddDoctor></AddDoctor></AdminRoute> 
        },
      ]
    }
])
export default router;