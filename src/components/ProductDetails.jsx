import { useLoaderData, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-regular-svg-icons'

export default function ProductDetails() {
  const { id } = useParams()
  const product = useLoaderData()
  return (
    <div className="product-cards" id={id}>
      <img src={product.image} alt={product.image} />
      <div className="product-details">
        <div className="title-container">
          <h2>{product.title}</h2>
        </div>
        <div className="product-buttons">
          <button className="view">View</button>
          <button className="like">
            <FontAwesomeIcon
              icon={faHeart}
              style={{ color: '#fff', width: '24px', height: '24px' }}
            />
          </button>
        </div>
      </div>
    </div>
  )
}

export const itemDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery/' + id,
  )

  return res.json()
}
