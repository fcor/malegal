import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo from '../assets/img/logo.png'

const Logo = ({ variant }) =>{
  if (variant === 'link') {
    return(
      <NavLink
        exact
        to='/'
        >
        <Img variant="logo"/>
      </NavLink>
    )
  }
  return <Img variant="logo-big" />
}



const Img = (props) =>
  <img
    src={logo}
    alt="logo"
    className={props.variant}
  />

Logo.defaultProps = {
  variant: 'No'
}

Logo.propTypes = {
  variant: PropTypes.string,
}


export default Logo
