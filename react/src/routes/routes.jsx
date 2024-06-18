import { createBrowserRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import LoginDashboard from "../pages/LoginDashboard";

import DashboardL from "../layouts/DashboardL";
import Dashboard from "../components/manageMainC/dashboard";
import ManageArticle from "../pages/ManageArticle";
import ManageEvent from "../pages/ManageArticle";
import ManageAdmin from "../components/manageAdminC/manageAdmin";

import FormL from "../layouts/FormL";
import AddProduct from "../components/productForm/AddProduct";
import AddArticle from "../components/articleForm/AddArticles";
import EditArticle from "../components/articleForm/EditArticles";
import AddAdmin from "../components/manageAdminC/AddAdmin";

import ErrorPage from "../pages/ErrorPage";


const router = createBrowserRouter([
  { index: true, element: <LandingPage /> },
  {
    path: "/dashboard",
    element: <DashboardL />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "manage-event", element: <ManageEvent /> },
      // { path: "manage-product", element: <ManageProduct /> },
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
    path: "/dashboard/manage-article/edit/:articleId",
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
