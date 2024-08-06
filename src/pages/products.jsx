import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NestedProducts = () => {
  return (
    <div>
       <Link to="allproduct">AllProduct</Link> 
       <Link to="addproduct">CreatedProduct</Link> 
       <Link to="updateproduct">UpdateProduct</Link> 
       <Outlet />
    </div>
  )
}

export default NestedProducts