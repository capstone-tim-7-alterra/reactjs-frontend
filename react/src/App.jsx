import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import LandingPage from './pages/LandingPage'
// import FormL from "./layouts/FormL"
// import AddProduct from "./components/productForm/AddProduct"
// import EditProduct from "./components/productForm/EditProducts"
// import AddArticle from "./components/articleForm/AddArticles"
// import EditArticle from "./components/articleForm/EditArticles"
import DashboardArticles from "./pages/ManageArticlesD"

import './App.css'


export default function App() {
  return (
    <>
      <Router>
        <Routes>
          {/* <Route path="/" element={<FormL />}>
            <Route index element={<AddProduct />} />
          </Route> */}
          {/* <Route path="/" element={<LandingPage/>}/> */}
          <Route path="/" element={<DashboardArticles />}/>
        </Routes>
      </Router>

      {/* <HomePage /> */}
      {/* <AddProduct /> */}

    </>
  )
}
