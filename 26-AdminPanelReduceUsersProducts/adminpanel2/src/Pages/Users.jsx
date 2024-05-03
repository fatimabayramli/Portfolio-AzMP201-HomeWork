import React, { useEffect, useReducer, useState } from "react";
import reducer from "../Reducer/reducer";
import { getAllData, deleteById } from "../services";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { BASE_URL2 } from "../services/api";

const Users = ({ state, dispatch }) => {

  const deleteItem = (id) => {
    deleteById(id);
    dispatch({
      type: "deleteData",
      id,
    });
  };

  return (
    <>
    
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                ID
              </th>
              <th scope="col" className="px-6 py-3">
                Username
              </th>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Surname
              </th>
              <th scope="col" className="px-6 py-3">
                Password
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {state.data.map((elemm) => {
              return (
                <tr
                  key={elemm.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {elemm.id}
                  </th>
                  <td className="px-6 py-4">{elemm.username}</td>
                  <td className="px-6 py-4">{elemm.name}</td>
                  <td className="px-6 py-4">{elemm.surname}</td>
                  <td className="px-6 py-4">{elemm.password}</td>
                  <td className="px-6 py-4">{elemm.email}</td>
                  <td>
                    <button
                      onClick={() => {
                        deleteItem(elemm.id);
                      }}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Delete
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        navigate("/edit", { state: { id: elemm.id } });
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

    </>
  )
}

export default Users