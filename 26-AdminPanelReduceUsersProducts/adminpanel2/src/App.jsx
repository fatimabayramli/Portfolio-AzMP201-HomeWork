import { useEffect, useReducer, useState } from 'react'
import './App.css'
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Post from './Pages/Post';
import Edit from './Pages/Edit';
import "./index.css"
import reducer from './Reducer/reducer';
import { getAllData } from './services';
import Users from './Pages/Users';
import { BASE_URL, BASE_URL2 } from './services/api';

function App() {

  const [state, dispatch] = useReducer(reducer, {
    data: [],
  });

  useEffect(() => {
    getAllData(BASE_URL).then((res) => {
      dispatch({
        type: "setData",
        data: res,
      });
    });
  });

  useEffect(() => {
    getAllData(BASE_URL2).then((res) => {
      dispatch({
        type: "setUsers",
        data: res,
      });
    });
  });

  return (
    <>
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home state = {state} dispatch = {dispatch} />} />
          <Route path="post" element={<Post />} />
          <Route path="edit" element={<Edit state = {state} dispatch = {dispatch} />} />
          <Route path="users" element={<Users state = {state} dispatch = {dispatch} />} />
          {/* <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
