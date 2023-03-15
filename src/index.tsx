import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from 'App'
import Root from "./routes/root";
import ErrorPage from "./error-page";
import Contact from "./routes/contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },

    
  {
    path: "contacts",
    element: <Contact />,
  },
  ]);

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
    <RouterProvider router={router} />


);
