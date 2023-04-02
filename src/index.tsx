import { createRoot } from 'react-dom/client'
import 'tailwindcss/tailwind.css'
import { ChakraProvider } from '@chakra-ui/react'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";

import App from 'App'
import ErrorPage from "./error-page";

const router = createBrowserRouter([
  /*
  Este é um exemplo de como criar rotas, importante lembrar
  de importar antes!
  */

  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },


  ]);

const container = document.getElementById('root') as HTMLDivElement
const root = createRoot(container)

root.render(
  <ChakraProvider>
      <RouterProvider router={router} />
  </ChakraProvider>
);
