import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main"
import Appoinment from "../../Pages/Appoinment/Appoinment/Appoinment";
import AddDoctor from "../../Pages/Dashboard/AddDoctor/AddDoctor";
import AllUsers from "../../Pages/Dashboard/AllUsers/AllUsers";
import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Payment from "../../Pages/Dashboard/Dashboard/Payment/Payment";
import ManageDoctors from "../../Pages/Dashboard/ManageDoctors/ManageDoctors";
import MyAppointment from "../../Pages/Dashboard/MyAppointment/MyAppointment";
import DashboardLayout from "../../Pages/DashboardLayout";
import Home from "../../Pages/Home/Home/Home"
import Login from "../../Pages/Login/Login";
import DisplayError from "../../Pages/Shared/DisplayError/DisplayError";
import SignUp from "../../Pages/SignUp/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AdminRoute from "./AdminRoute/AdminRoute";


 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <DisplayError></DisplayError>,
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
      errorElement: <DisplayError></DisplayError>,
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
        {
          path: '/dashboard/managedoctors',
          element: <AdminRoute><ManageDoctors></ManageDoctors></AdminRoute> 
        },
        {
          path: '/dashboard/payment/:id',
          element: <Payment></Payment>,
          loader:({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
          
        
        },
      ]
    }
])
export default router;