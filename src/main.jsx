import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layOut/Main.jsx';
import Home from './pages/Home/Home.jsx';

const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)