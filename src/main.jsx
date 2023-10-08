import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './layOut/Main.jsx';
import Home from './pages/Home/Home.jsx';
import About from './pages/About';
import Syllabus from './pages/Syllabus';
import Contact from './pages/Contact';
import Login from './pages/Login';


const router = createBrowserRouter([
      {
        path: "/",
        element: <Main></Main>,
        children: [
          {
            path: "/",
            element: <Home></Home>
          },
          {
            path: "syllabus",
            element: <Syllabus></Syllabus>
          },
          {
            path: "about",
            element: <About></About>
          },
          {
            path: "contact",
            element: <Contact></Contact>
          },
          {
            path: "login",
            element: <Login></Login>
          }
        ]
      }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode> 
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
