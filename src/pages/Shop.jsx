import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

import '../styles/shop.css'
import { useLoaderData, Link } from 'react-router-dom'

export default function Shop() {
  const products = useLoaderData()
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
              <Link to={product.id.toString()}>
                <button className="view">View</button>
              </Link>

              <button className="like">
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{ color: '#fff', width: '24px', height: '24px' }}
                />
              </button>
            </div>
          </div>
        </div>
      ))}
      <div className="neon-mist-shop"></div>
    </div>
  )
}

export const shoppingLoader = async () => {
  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery/',
  )

  return res.json()
}
