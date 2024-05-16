import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './routes/root.jsx';

import Home from './components/Pages/Home.jsx';
import Destination from './components/Pages/Destination.jsx';
import Activities from './components/Pages/Activities.jsx';
import ErrorPage from './error-page.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
  
    children:[
      {
        path:"/home",
        element: <Home/>,
      },
      {
        path:"/destination",
        element: <Destination />,
      },
      {
        path:"/activities",
        element: <Activities/>,
      },
    ],
  },
  
 
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
