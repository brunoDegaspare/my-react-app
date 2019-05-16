import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import './header.css'

const Header = ({ siteTitle }) => (
  <header>
    
    <div className="header">
      <div className="header__group">
        <Link to="/" className="header__link"><img src={require('../images/logo-designcode.svg')} width="30"></img></Link>
        <Link to="/courses" className="header__link">Courses</Link>
        <Link to="/downloads" className="header__link">Downloads</Link>
        <Link to="/workshops" className="header__link">Workshops</Link>
        <Link to="/buy"><button>Buy</button></Link>
      </div>
    </div>

  </header>
)

export default Header
