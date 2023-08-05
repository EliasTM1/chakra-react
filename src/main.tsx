import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Topbar from './components/Topbar.component.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <Topbar/> */}
    <RouterProvider router={router} ></RouterProvider>
  </React.StrictMode>,
)
