import React, { useContext, useEffect, useState } from "react";
import { DataContext } from "../../context/DataProvider";
import "../../style/table.css";
import Navbar from "../../components/Navbar";

const ProductTable = () => {
  const { data,handleDeleteItem } = useContext(DataContext);
  const [sortedData, setSortedData] = useState([]);
  const [sortedByNameDirection, setSortedByNameDirection] = useState("asc");
  const [sortedByPriceDirection, setSortedByPriceDirection] = useState("asc");
  const [sortedByRatingDirection, setSortedByRatingDirection] = useState("asc");
  const [sortedByCountDirection, setSortedByCountDirection] = useState("asc");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    setSortedData(data);
  }, [data]);


  const handleSortByName = () => {
    if (sortedByNameDirection === "asc") {
      const sortedByNameDesc = [...sortedData].sort((a, b) =>
        b.title.localeCompare(a.title)
      );
      setSortedData(sortedByNameDesc);
      setSortedByNameDirection("desc");
    } else {
      const sortedByNameAsc = [...sortedData].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      setSortedData(sortedByNameAsc);
      setSortedByNameDirection("asc");
    }
  };

  const handleSortByPrice = () => {
    if (sortedByPriceDirection === "asc") {
      const sortedByPriceDesc = [...sortedData].sort(
        (a, b) => b.price - a.price
      );
      setSortedData(sortedByPriceDesc);
      setSortedByPriceDirection("desc");
    } else {
      const sortedByPriceAsc = [...sortedData].sort(
        (a, b) => a.price - b.price
      );
      setSortedData(sortedByPriceAsc);
      setSortedByPriceDirection("asc");
    }
  };

  const handleSortByRating = () => {
    if (sortedByRatingDirection === "asc") {
      const sortedByRatingDesc = [...sortedData].sort(
        (a, b) => b.rating.rate - a.rating.rate
      );
      setSortedData(sortedByRatingDesc);
      setSortedByRatingDirection("desc");
    } else {
      const sortedByRatingAsc = [...sortedData].sort(
        (a, b) => a.rating.rate - b.rating.rate
      );
      setSortedData(sortedByRatingAsc);
      setSortedByRatingDirection("asc");
    }
  };

  const handleSortByCount = () => {
    if (sortedByCountDirection === "asc") {
      const sortedByCountDesc = [...sortedData].sort(
        (a, b) => b.rating.count - a.rating.count
      );
      setSortedData(sortedByCountDesc);
      setSortedByCountDirection("desc");
    } else {
      const sortedByCountAsc = [...sortedData].sort(
        (a, b) => a.rating.count - b.rating.count
      );
      setSortedData(sortedByCountAsc);
      setSortedByCountDirection("asc");
    }
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredData = sortedData.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      try {
        await handleDeleteItem(id);
      } catch (error) {
        console.error("Error deleting item:", error);
      }
    }
  };

  return (
    <div className="relative overflow-x-auto">
      <Navbar />
      <input
        type="text"
        placeholder="Search by title..."
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
      <button
        onClick={handleSortByName}
        type="button"
        className="sortButton sortbyname"
      >
        Sort by Name
      </button>
      <button
        onClick={handleSortByPrice}
        type="button"
        className="sortButton sortbyprice"
      >
        Sort by Price
      </button>
      <button
        onClick={handleSortByRating}
        type="button"
        className="sortButton sortbyrating"
      >
        Sort by Rating
      </button>
      <button
        onClick={handleSortByCount}
        type="button"
        className="sortButton sortbycount"
      >
        Sort by Count
      </button>

      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Category</th>
            <th>Image</th>
            <th>Rate</th>
            <th>Count</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((elem, index) => (
            <tr key={elem.id} className={index % 2 === 0 ? "even" : "odd"}>
              <td>{elem.id}</td>
              <td>{elem.title}</td>
              <td>{elem.price}</td>
              <td>{elem.category}</td>
              <td>
                <img src={elem.image} alt="" className="table-image" />
              </td>
              <td>{elem.rating.rate}</td>
              <td>{elem.rating.count}</td>
              <td>
                <button 
                onClick={() => handleDelete(elem.id)}
                >
                  Delete
                  </button>
                <button
                  onClick={() => navigate("/edit", { state: { id: elem.id } })}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
