import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../assets/css/ProductTable.css"

const ProductTable = ({ onAddToBasket }) => {
  const [products, setProducts] = useState([]);
  const [sortedByName, setSortedByName] = useState(null);
  const [sortedByPrice, setSortedByPrice] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios.get('https://northwind.now.sh/api/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleAddToBasket = (product) => {
    onAddToBasket(product);
  };

  const handleSortByName = () => {
    const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
    setProducts(sortedByName === 'asc' ? sortedProducts.reverse() : sortedProducts);
    setSortedByPrice(null);
    setSortedByName(sortedByName === 'asc' ? 'desc' : 'asc');
  };

  const handleSortByPrice = () => {
    const sortedProducts = [...products].sort((a, b) => a.unitPrice - b.unitPrice);
    setProducts(sortedByPrice === 'asc' ? sortedProducts.reverse() : sortedProducts);
    setSortedByName(null);
    setSortedByPrice(sortedByPrice === 'asc' ? 'desc' : 'asc');
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name && product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <input className='search-input' type="text" placeholder="Search by name..." onChange={handleSearch} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name <button onClick={handleSortByName}>Sort</button></th>
            <th>Unit Price <button onClick={handleSortByPrice}>Sort</button></th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td>{product.unitPrice}</td>
              <td><button onClick={() => handleAddToBasket(product)}>Add to Basket</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;

