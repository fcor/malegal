import React from 'react'
import PropTypes from 'prop-types'
import Links from './Links'
import Logo from './Logo'
import Hamburger from './Hamburger'

const Navbar = ({ variant, type }) =>
  <div className={`navbar row ${variant}`}>
    <Logo variant="link" type={type} />
    <div className="navbar-desktop">
      <Links variant="navbar" />
    </div>
    <Hamburger variant={type} />
  </div>

Navbar.propTypes = {
  variant: PropTypes.string,
}

Navbar.defaultProps = {
  variant: 'classic'
}

export default Navbar
