import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import ProductTable from './Pages/Products/ProductTable.jsx'
import {DataProvider} from './context/DataProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
  <App/>
  </DataProvider>
)
