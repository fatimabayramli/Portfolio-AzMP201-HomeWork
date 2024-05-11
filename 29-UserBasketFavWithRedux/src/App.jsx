import { useState } from 'react'
import './App.css'
import ProductTable from './Pages/Products/ProductTable';
import {DataProvider} from "./context/DataProvider"
// import Layout from './components/Layout';


const App = () => {
  return (
    <div>
    <DataProvider>
      <ProductTable />
    </DataProvider>
    {/* <Layout/> */}
    </div>
  );
};


export default App
