import React from 'react'
import Home from './pages/Home';
import MainLayout from './layouts/MainLayout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>
    }
]);

const Routes=()=>{
    return <RouterProvider router={router}/>
}

export default Routes;