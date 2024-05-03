import { useEffect, useReducer, useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Admin from './Pages/Admin';
import Post from './Pages/Post';
import Edit from './Pages/Edit';
import "./index.css"
import reducer from './Reducer/reducer';
import { getAllData } from './services';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });

  useEffect(() => {
    getAllData().then((res) => {
      dispatch({
        type: "setData",
        data: res,
      });
    });
  });

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Admin state = {state} dispatch = {dispatch} />} />
          <Route path="post" element={<Post />} />
          <Route path="edit" element={<Edit state = {state} dispatch = {dispatch} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
