import React, { useState } from "react";
import "./App.css";

const products = [
  { id: 1, name: "Laptop", price: 75000 },
  { id: 2, name: "Smartphone", price: 35000 },
  { id: 3, name: "Headphones", price: 5000 },
  { id: 4, name: "Keyboard", price: 2500 },
  { id: 5, name: "Mouse", price: 1200 },
];

function App() {
  const [isGrid, setIsGrid] = useState(true);
  const [filter, setFilter] = useState("");
  const [hoveredId, setHoveredId] = useState(null);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Product List</h1>

      {/* Filter input */}
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />

      {/* Layout toggle */}
      <button onClick={() => setIsGrid(!isGrid)}>
        Switch to {isGrid ? "List" : "Grid"}
      </button>

      <div className={isGrid ? "products grid" : "products list"}>
        {/* Empty-state conditional */}
        {filteredProducts.length === 0 ? (
          <p>No products available</p>
        ) : (
          filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`product ${
                hoveredId === product.id ? "highlight" : ""
              }`}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <h2>{product.name}</h2>
              <p>₹{product.price}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;
