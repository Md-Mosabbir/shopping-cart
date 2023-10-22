import Logo from '../assets/svg/Logo.svg'
import ShoppingBag from '../assets/svg/local_mall.svg'
import Search from '../assets/svg/search.svg'
import PropTypes from 'prop-types'
import '../styles/navigation.css'

import { NavLink, Outlet } from 'react-router-dom'
export default function Root({ displayCart }) {
  return (
    <>
      <div className="nav-container">
        <nav className="navigation-bar">
          <div className="nav-option-first">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/shop">Shop</NavLink>
              </li>
              <li>
                <NavLink to="/about">About Us</NavLink>
              </li>
            </ul>
          </div>
          <div className="logo">
            <img src={Logo} alt="Logo" />
          </div>
          <div className="nav-option-second">
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <button onClick={displayCart}>
                  <img src={ShoppingBag} alt="Shopping bag icon" />
                </button>
              </li>
              <li>
                <a href="#">
                  <img src={Search} alt="Search icon" />
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <main className="content">
        <Outlet />
      </main>
    </>
  )
}

Root.propTypes = {
  displayCart: PropTypes.string,
}
