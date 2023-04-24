import { extendTheme } from "@chakra-ui/react";
import { createRoot } from "react-dom/client";
import "tailwindcss/tailwind.css";
import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "App";
import "./utils/i18n";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container);

root.render(
  <ChakraProvider>
    <App />
  </ChakraProvider>
);
