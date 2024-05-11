import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
const DataContext = React.createContext();

const getAllData = async () => {
  try {
    const res = await axios('http://localhost:3000/products');
    return res.data;
  } catch (error) {
    console.error('Error', error);
  }
};

const deleteById = async (id) => {
  try {
    const res = await axios.delete(`http://localhost:3000/products/${id}`);
    return res.data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllData();
      setData(result);
    };

    fetchData();
  }, []);

  
  const handleDeleteItem = async (id) => {
    try {
      await deleteById(id);
      const updatedData = await getAllData();
      setData(updatedData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <DataContext.Provider value={{ data, handleDeleteItem }}>
      {children}
    </DataContext.Provider>
  );
};

export { DataContext, DataProvider };
