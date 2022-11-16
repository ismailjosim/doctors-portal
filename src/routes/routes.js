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
import Dashboard from '../components/Dashboard/Dashboard';
import Private from './Private';


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
        element: <Private><Dashboard /></Private>
    }
])

export default routes;
