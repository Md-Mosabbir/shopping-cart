import '../styles/home.css'
import heroImage from '../assets/images/Hero-Ring.png'

export default function Home() {
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
            Capturing Love&apos;s Essence, One Ring, Two Hearts
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
