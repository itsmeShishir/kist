import React from 'react'
import { Header } from "./components/header"
import Footer from './components/footer'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import SingeProduct from './pages/singlepage.jsx'
const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element="Hello From products Page"/>
        <Route path='/singlepage' element={<SingeProduct />}/>
      </Routes>
      <Footer />
    </div>
  )
}

export default App