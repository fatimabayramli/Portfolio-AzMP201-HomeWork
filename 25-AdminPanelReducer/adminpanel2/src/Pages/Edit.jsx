import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

const Edit = ({state, dispatch}) => {

  const location = useLocation();
  const [formData, setFormData] = useState({
    editTitle: '',
    editPrice: '',
    editCategory: '',
    editImage: '',
    editRate: '',
    editCount: '',
  });
  const [editItem, setEditItem] = useState(null);
  
  useEffect(() => {
    const editId = location.state.id;
    const findItem = state.data.find(item => item.id === editId);
    if (findItem) {
      setEditItem(findItem);
      setFormData({
        editTitle: findItem.title,
        editPrice: findItem.price,
        editCategory: findItem.category,
        editImage: findItem.image,
        editRate: findItem.rating.rate,
        editCount: findItem.rating.count,
      });
    }
  }, [location.state.id, state.data]);

  let handleChange = (e) => {
    console.log("handleChange", e.target.name, e.target.value);
    let name = e.target.name;
    let value = e.target.value;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log( formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await patchById(editItem.id, formData);
      dispatch({ type: 'editData', data: { id: editItem.id, data: formData } });
    
    } catch (error) {
   
      console.error('Error', error);
    }
  };

  return (
    <>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
  <div className="mb-5">
    <label
      htmlFor="title"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Title
    </label>
    <input
      value={formData.editTitle}
      type="text"
      id="title"
      name="title"
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="price"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Price
    </label>
    <input
      value={formData.editPrice}
      type="text"
      id="price"
      name="price"
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="category"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Category
    </label>
    <input
       value={formData.editCategory}
       type="text"
       id="category"
       name="category"
       onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="image"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Image
    </label>
    <input
      value={formData.editImage}
      type="text"
      id="image"
      name="image"
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""    
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="rate"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Rate
    </label>
    <input
      value={formData.editRate}
      type="text"
      id="rate"
      name="rate"
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""    
    />
  </div>
  <div className="mb-5">
    <label
      htmlFor="count"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Count
    </label>
    <input
      value={formData.editCount}
      type="text"
      id="count"
      name="count"
      onChange={handleChange}
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""    
    />
  </div>

  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Edit
  </button>
</form>
    </>
  )
}


export default Edit