import Main from '../layouts/Main';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import Appointments from '../components/Appointments/Appointments';
import Reviews from '../components/Reviews/Reviews';
import Contact from '../components/Contact Us/Contact';
import UserLogin from '../components/Auth/UserLogin';
import UserSignUp from '../components/Auth/UserSignUp';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { createBrowserRouter } from 'react-router-dom';
import Private from './Private';
import DashboardLayout from '../layouts/DashboardLayout';
import MyAppointment from '../components/My Appointment/MyAppointment';
import AllUsers from '../components/AllUsers/AllUsers';
import AdminRoute from './AdminRoute';
import AddDoctor from '../components/AddDoctor/AddDoctor';
import ManageDoctors from '../components/ManageDoctors/ManageDoctors';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/appointment',
                element: <Appointments />
            },
            {
                path: '/reviews',
                element: <Reviews />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/login',
                element: <UserLogin />
            },
            {
                path: '/register',
                element: <UserSignUp />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Private><DashboardLayout /></Private>,
        children: [
            {
                path: '/dashboard',
                element: <MyAppointment />
            },
            {
                path: '/dashboard/users',
                element: <AdminRoute><AllUsers /></AdminRoute>
            },
            {
                path: '/dashboard/addadoctor',
                element: <AdminRoute><AddDoctor /></AdminRoute>
            },
            {
                path: '/dashboard/managedoctors',
                element: <AdminRoute><ManageDoctors /></AdminRoute>
            }
        ]
    }
])

export default routes;
