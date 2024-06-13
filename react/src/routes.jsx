// import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import FormL from "./layouts/FormL";
import DashboardL from "./layouts/DashboardL";
import Dashboard from "./components/ManageDashboard/dashboard";
import ManageArticle from "./pages/ManageArticle";
import ManageEvent from "./pages/ManageArticle";
import ManageProduct from "./components/ManageDashboardProduct/ManageDashboardProduct";
import AddProduct from "./components/productForm/AddProduct";
import ManageAdmin from "./components/manageAdmin/manageAdmin";
import AddAdmin from "./components/manageAdmin/AddAdmin";
import AddArticle from "./components/articleForm/AddArticles";
import EditArticle from "./components/articleForm/EditArticles";
import ErrorPage from "./pages/ErrorPage";
import LoginDashboard from "./components/LoginDashboard/LoginDashboard";

const router = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  {
    path: "/dashboard",
    element: <DashboardL />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "manage-event", element: <ManageEvent /> },
      { path: "manage-product", element: <ManageProduct /> },
      { path: "manage-article", element: <ManageArticle /> },
      { path: "manage-admin", element: <ManageAdmin /> },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard/manage-product/add",
    element: <FormL />,
    children: [{ index: true, element: <AddProduct /> }],
  },
  {
    path: "/dashboard/manage-admin/add",
    element: <FormL />,
    children: [{ index: true, element: <AddAdmin /> }],
  },
  {
    path: "/dashboard/manage-article/add",
    element: <FormL />,
    children: [{ index: true, element: <AddArticle /> }],
  },
  {
    path: "/dashboard/manage-article/edit",
    element: <FormL />,
    children: [{ index: true, element: <EditArticle /> }],
  },
  {
    path: "/login",
    element: <LoginDashboard />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default router;
