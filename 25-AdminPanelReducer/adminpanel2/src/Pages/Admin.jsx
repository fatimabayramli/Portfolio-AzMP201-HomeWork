import React, { useEffect, useReducer } from "react";
import reducer from "../Reducer/reducer";
import { getAllData,deleteById } from "../services";
import { useNavigate } from "react-router-dom";

const Admin = ({state, dispatch}) => {
  let navigate = useNavigate()

  const deleteItem = (id) => {
    deleteById(id)
    dispatch({
      type: "deleteData",
      id
    });
  }
  return (
    <>
      <div className="relative overflow-x-auto">
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
              <th scope="col" className="actions px-6 py-3" >
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
                    <button onClick={()=>{
                      deleteItem(elem.id)
                    }} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                      Delete
                    </button>
                  </td>
                  <td>
                    <button 
                    onClick={()=>{
                      navigate("/edit", {state: {id:elem.id}})
                    }}
                    className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
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

export default Admin;
