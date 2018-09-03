import React from 'react'
import PropTypes from 'prop-types'
import Links from './Links'
import Logo from './Logo'
import Hamburger from './Hamburger'

const Navbar = ({ variant }) =>
  <div className={`navbar row ${variant}`}>
    <Logo variant="link" />
    <div className="navbar-desktop">
      <Links variant="navbar" />
    </div>
    <Hamburger />
  </div>

Navbar.propTypes = {
  variant: PropTypes.string,
}

Navbar.defaultProps = {
  variant: 'classic'
}

export default Navbar
