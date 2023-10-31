import { useLoaderData, useParams } from 'react-router-dom'

import '../styles/product-details.css'

export default function ProductDetails() {
  const { id } = useParams()
  const product = useLoaderData()

  return (
    <div className="products-details" id={id}>
      <img src={product.image} alt={product.image} />
      <div className="product-info-details">
        <div className="title-desc">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <strong>${product.price}</strong>
        </div>
        <div className="buy-buttons">
          <button>Add to Cart</button>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  )
}

export const itemDetailsLoader = async ({ params }) => {
  const { id } = params

  const res = await fetch(
    'https://fakestoreapi.com/products/category/jewelery/',
  )
  const resObj = await res.json()

  const specificProduct = resObj.find((pr) => pr.id === parseInt(id))

  if (specificProduct) {
    return specificProduct
  }
}
