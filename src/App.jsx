import { useEffect } from 'react'
import './App.css'
import heroImage from './assets/images/Hero-Ring.png'

export default function App() {
  useEffect(() => {
    fetch('https://fakestoreapi.com/products/category/jewelery')
      .then((res) => res.json())
      .then((json) => setProducts(json))
  }, [])
  return (
    <div className="main-content">
      <div className="mesh-gradient"></div>
      <p className="special-message">
        Where love shines brighter than diamonds, and hearts find their timeless
        home
      </p>

      <main className="hero">
        <div className="hero-text">
          <h1 className="hero-title">
            Capturing Love's Essence, One Ring, Two Hearts
          </h1>
          <h3>Forever Yours, Forever Us.</h3>
          <button>Explore</button>
        </div>

        <div className="hero-image">
          <div className="hero-img-container">
            <img src={heroImage} alt="Ring" />
          </div>
        </div>
      </main>
    </div>
  )
}
