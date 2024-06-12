// import * as React from "react";
// import * as ReactDOM from "react-dom";
import { createBrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage'
import FormL from "./layouts/FormL"
import DashboardL from "./layouts/DashboardL"
import Dashboard from "./pages/ManageArticle"
import ManageArticle from "./pages/ManageArticle"
import ManageTicket from "./pages/ManageArticle"
import ManageProduct from "./pages/ManageArticle"
import AddArticle from "./components/articleForm/AddArticles"
import EditArticle from "./components/articleForm/EditArticles"
import ErrorPage from "./pages/ErrorPage"

// FLOW ROUTING ADMIN : 

// Login Dashboard = 

// 1.Product = /manageproducts, /addproduct, /editproduct
// 2.Ticketing/Event = /manageevent, /addevent, /editevent
// 3.Admin = /manageadmin, /addadmin, /editadmin
// 4.Manage Article = /managearticle, /addarticle, /editarticle

const router = createBrowserRouter([
    { index: true, element: <LandingPage /> },
    {
      path: '/dashboard',
      element: <DashboardL />,
      children: [
        { index: true, element: <Dashboard /> },
        { path: 'manage-ticket', element: <ManageTicket /> }, 
        { path: 'manage-product', element: <ManageProduct /> }, 
        { path: 'manage-article', element: <ManageArticle /> },
        {
          path: '*',
          element: <ErrorPage />,
        }
        ],
    },
    {
        path: '/dashboard/manage-article/add',
        element: <FormL />,
        children: [{ index: true, element: <AddArticle /> }],
    },
    {
        path: '/dashboard/manage-article/edit',
        element: <FormL />,
        children: [{ index: true, element: <EditArticle /> }],
    },
  ]);

  export default router;
  





