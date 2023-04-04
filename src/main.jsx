import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Home/Home';
import About from './About/About';
import Contact from './Contact/Contact';
import First from './First/First';
import Friends from './Friends/Friends';
import FriendDetails from './FriendDetails/FriendDetails';

const router = createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children: [
      {
        path: '/',
        element: <First></First>
      },
     
      {
        path: '/about',
        element: <About></About>
      },
      {
      path: '/friends',
      element:<Friends></Friends>,
      loader: () => fetch('https://jsonplaceholder.typicode.com/users')

      },
      {
        path: 'friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
        
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      },
      {
        path:'*',
        element: <div>44444444004400400404044004</div>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
