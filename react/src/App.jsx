// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { RouterProvider } from 'react-router-dom';
// import { PageTitleProvider } from './hooks/PageTitleContext';
// import LandingPage from './pages/LandingPage'
// import FormL from "./layouts/FormL"
// import DashboardL from "./layouts/DashboardL"
// import AddProduct from "./components/productForm/AddProduct"
// import EditProduct from "./components/productForm/EditProducts"
// import AddArticle from "./components/articleForm/AddArticles"
// import EditArticle from "./components/articleForm/EditArticles"
// import DashboardArticles from "./pages/ManageArticlesD"
// import ManageArticle from "./pages/ManageArticle"
import router from './routes'
import './App.css'


export default function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />
      </div>
      {/* <Router>
          <Routes>
            <Route path="/" element={<LandingPage/>}/>
            <Route path="/dashboard" element={<DashboardL />}>
              <Route index element={<MainDashboard />} />
              <Route path="manage-product" element={<ManageProduct />} />
              <Route path="manage-product/add" element={<AddProduct />} />
              <Route path="manage-product/edit" element={<EditProduct />} />
              <Route path="manage-article" element={<ManageArticle />} > 
                <Route element={<FormL/>}>
                    <Route path="add" element={<AddArticle />} />
                </Route>
              </Route>
            </Route>
          </Routes>
      </Router> */}

      {/* <HomePage /> */}
      {/* <AddProduct /> */}

    </>
  )
}
