import React from 'react'
import PropTypes from 'prop-types'
import Links from './Links'
import Logo from './Logo'

const Navbar = ({ variant }) =>
  <div className={`navbar row ${variant}`}>
    <Logo variant="link" />
    <Links variant="navbar" />
  </div>

Navbar.propTypes = {
  variant: PropTypes.string,
}

Navbar.defaultProps = {
  variant: 'classic'
}

export default Navbar
