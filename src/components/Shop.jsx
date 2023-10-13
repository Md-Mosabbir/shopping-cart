import { useState, useEffect } from 'react'

import '../styles/shop.css'

export default function Shop() {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])

  return (
    <div className="products">
      {products.map((product) => (
        <div key={product.id} className="product-cards">
          <img src={product.image} alt={product.image} />
          <div className="product-details">
            <div className="title-container">
              <h2>{product.title}</h2>
            </div>
            <div className="product-buttons">
              <button className="view">View</button>
              <button className="like">like</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
