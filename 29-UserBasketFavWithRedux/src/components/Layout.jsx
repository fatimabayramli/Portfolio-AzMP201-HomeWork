import React from 'react'
import HomePage from '../Pages/Home/HomePage'
import Post from '../Pages/Post/Post'
import ProductTable from '../Pages/Products/ProductTable'
import Users from '../Pages/Users/Users'
import Navbar from './Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Layout = () => {
  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<HomePage  />} />
          <Route path="post" element={<Post />} />
          <Route path="products" element={<ProductTable  />} />
          <Route path="users" element={<Users  />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default Layout