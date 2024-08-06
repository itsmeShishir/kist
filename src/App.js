import React from 'react'
import { Header } from "./components/header"
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import SingeProduct from './pages/singlepage.jsx'
import NestedProducts from './pages/products.jsx'

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element="Hello From products Page"/>
        <Route path='/singlepage/:id' element={<SingeProduct />}/>
        <Route path='/product' element={<NestedProducts/>}>
            <Route path="addproduct" element="Add Product" />
            <Route path="updateproduct" element="Update Product" />
            <Route index element="All Product" />
        </Route>
        <Route path="*" element="404 Page not found" />
      </Routes>
      <Footer />
    </div>
  )
}

export default App