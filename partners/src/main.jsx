import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PartnerCard from "./components/PartnerCard";
import AddPartner from "./pages/AddPartner";
import UpdatePartner from "./pages/UpdatePartner";
import PartnersProvider from "./providers/PartnersGlobalState";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/partner/:id",
    element: <PartnerCard />,
  },
  {
    path: "/partner/add",
    element: <AddPartner />,
  },
  {
    path: "/partner/update/:id",
    element: <UpdatePartner />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PartnersProvider>
      <RouterProvider router={router} />
    </PartnersProvider>
  </React.StrictMode>,
);
