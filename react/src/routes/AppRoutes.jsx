// src/routes/AppRoutes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Navbar from '../pages/Navbar';
import Home from '../pages/Home';
import LoginForm from '../component/Eventhandling';
import About from '../pages/About';
import Contact from '../pages/Contact';
import User from '../pages/User';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: '/home',
    element: (
      <>
        <Navbar />
        <Home />
      </>
    )
  },
  {
    path: '/login',
    element: (
      <>
        <Navbar />
        <LoginForm />
      </>
    )
  },
  {
    path: '/about',
    element: (
      <>
        <Navbar />
        <About />
      </>
    )
  },
  {
    path: '/contact',
    element: (
      <>
        <Navbar />
        <Contact />
      </>
    )
  },
  {
    path: '/user/:username',
    element: (
      <>
        <Navbar />
        <User />
      </>
    )
  },
]);

export default router;
