import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { RouterProvider } from 'react-router-dom'


const Body = () => {

    const appRoute=createBrowserRouter([
        {
            path:'/',
            element:<Login/>
        },
        {
            path:'/Browse',
            element:<Browse/>
        }
    ])
  return (
    <div>
        <RouterProvider router={appRoute}/>
    </div>
  )
}

export default Body