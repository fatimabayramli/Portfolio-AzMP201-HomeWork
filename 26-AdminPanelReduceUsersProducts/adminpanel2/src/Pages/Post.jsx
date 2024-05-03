import React, { useRef } from 'react'
import { postData } from '../services'

const Post = () => {

  const titlee = useRef()
  const pricee = useRef()
  const categoryy = useRef()
  const imagee = useRef()
  const ratee = useRef()
  const countt = useRef()

const handlePost = (e) => {
  e.preventDefault()
  let obj = {
    title: titlee.current.value,
    price: pricee.current.value,
    category: categoryy.current.value,
    image: imagee.current.value,
    rating: {
      rate: ratee.current.value,
      count: countt.current.value
    }
  }
  postData(obj)

  titlee.current.value = ""
  pricee.current.value = ""
  categoryy.current.value = ""
  imagee.current.value = ""
  ratee.current.value = ""
  countt.current.value = ""
}



  return (
    <>
    <form className="max-w-sm mx-auto" onSubmit={(e)=>{
      handlePost(e)
    }}>
  <div className="mb-5">
    <label
      htmlFor="title"
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
      Title
    </label>
    <input
      type="text"
      id="title" 
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""
      ref={titlee}
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
      type="text"
      id="price"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      required=""
      ref={pricee}

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
      type="text"
      id="category"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder=""
      required=""
      ref={categoryy}

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
      type="text"
      id="image"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="
      "
      required=""
      ref={imagee}

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
      type="text"
      id="rate"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="
      "
      required=""
      ref={ratee}

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
      type="text"
      id="count"
      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      placeholder="
      "
      required=""
      ref={countt}

    />
  </div>
  {/* <div className="flex items-start mb-5">
    <div className="flex items-center h-5">
      <input
        id="remember"
        type="checkbox"
        defaultValue=""
        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
        required=""
      />
    </div>
    <label
      htmlFor="remember"
      className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    >
      Remember me
    </label>
  </div> */}
  <button
    type="submit"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
  >
    Save Changes
  </button>
</form>

    </>
  )
}

export default Post