import React, { useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/reducer";
import { getAllData, deleteById } from "../services";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL } from "../services/api";


const Home = ({ state, dispatch }) => {
  // const [products, setProducts] = useState([]);
  // const [sortedByName, setSortedByName] = useState([]);
  // const [sortedByPrice, setSortedByPrice] = useState([]);
  // const [sortedByRate, setSortedByRate] = useState([]);
  // const [sortedByCount, setSortedByCount] = useState([]);
  // const [searchTerm, setSearchTerm] = useState('');



  const handleSortByName = () => {
    const sortedProducts =state.data.sort((a, b) => a.title.localeCompare(b.title));
    // setProducts(sortedByName === 'asc' ? sortedProducts.reverse() : sortedProducts);
    // setSortedByPrice(null);
    // setSortedByName(sortedByName === 'asc' ? 'desc' : 'asc');
    dispatch({
      type: "setAtoZ",
      data: sortedProducts

    })
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.price - b.price);
    setProducts(sortedByPrice === 'asc' ? sortedProducts.reverse() : sortedProducts);
    setSortedByPrice(null);
    setSortedByPrice(sortedByPrice === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByRating = () => {
    const sortedProducts = [...products].sort((a,b) => a.rating - b.rating)
    setProducts(sortedByRate === 'asc' ? sortedProducts.reverse() : sortedProducts)
    setSortedByRate(null)
    setSortedByPrice(sortedByRate === 'asc' ? 'desc' : 'asc')
  }

  const handleSortByCount = () => {
    const sortedProducts = [...products].sort((a,b) => a.rating - b.rating)
    setProducts(sortedByCount === 'asc' ? sortedProducts.reverse() : sortedProducts)
    setSortedByCount(null)
    setSortedByPrice(sortedByCount === 'asc' ? 'desc' : 'asc')
  }

  // const handleSearch = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  // const filteredProducts = products.filter(product =>
  //   product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  // );

  let navigate = useNavigate();


  const deleteItem = (id) => {
    deleteById(id);
    dispatch({
      type: "deleteData",
      id,
    });
  };
  return (
    <>
      <div className="relative overflow-x-auto">
        <button
        onClick={handleSortByName}
          type="button"
          className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sort by Name
        </button>
        <button
        onClick={handleSortByPrice}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sort by Price
        </button>
        <button
        onClick={handleSortByRating}
          type="button"
          className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sort by Rating
        </button>
        <button
          type="button"
          className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          Sort by Count
        </button>
        
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Price
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Rate
              </th>
              <th scope="col" className="px-6 py-3">
                Count
              </th>
              <th scope="col" className="actions px-6 py-3">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((elem) => {
              return (
                <tr
                  key={elem.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {elem.id}
                  </th>
                  <td className="px-6 py-4">{elem.title}</td>
                  <td className="px-6 py-4">{elem.price}</td>
                  <td className="px-6 py-4">{elem.category}</td>
                  <td className="px-6 py-4">{elem.image}</td>
                  <td className="px-6 py-4">{elem.rating.rate}</td>
                  <td className="px-6 py-4">{elem.rating.count}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(elem.id);
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("/edit", { state: { id: elem.id } });
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
