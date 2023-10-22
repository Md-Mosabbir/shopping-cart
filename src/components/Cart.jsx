import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faXmark } from '@fortawesome/free-solid-svg-icons'

import PropTypes from 'prop-types'
import '../styles/cart.css'

export default function Cart() {
  return (
    <aside className="cart">
      <nav className="cart-nav">
        <h2>0 Games</h2>
        <FontAwesomeIcon icon={faXmark} />
      </nav>

      <div className="cart-item-container"></div>

      <footer>
        <p>Total: $0</p>
      </footer>
    </aside>
  )
}
