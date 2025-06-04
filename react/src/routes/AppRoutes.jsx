import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from '../pages/navbar';
import Home from '../pages/Home';
import LoginForm from '../component/eventhandling';
import About from '../pages/About';
import Contact from '../pages/Contact';
import User from '../pages/User';

function AppRoutes() {
const router = createBrowserRouter([
  {
    path: '/home',
    element:<> <Navbar /><Home /> </>
  },
  {
    path: '/login',
    element:<> <Navbar /><LoginForm /></>
  },
  {
    path: '/about',
    element:<> <Navbar /><About /> </>
  },
   {
    path: '/contact',
    element:<> <Navbar /><Contact /> </>
  },
  {
    path: '/user/:username',
    element:<> <Navbar /><User /> </>
  },
])
  return (
    <>
    
  <RouterProvider router={router} />
  </>
)
}
export default AppRoutes;