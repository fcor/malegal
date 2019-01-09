import React from 'react'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import logo2 from '../assets/img/logoNew.png'
import logo from '../assets/img/logo2New.png'

const getLogo = (type) => (type === "home") ? logo2 : logo

const Logo = ({ variant, type }) =>{
  if (variant === 'link') {
    return(
      <NavLink
        exact
        to='/'
        >
        <Img variant="logo" type={type} />
      </NavLink>
    )
  }
  return <Img variant="logo-big" />
}



const Img = (props) =>
  <img
    src={getLogo(props.type)}
    alt="logo"
    className={props.variant}
  />

Logo.defaultProps = {
  variant: 'No',
  type: 'normal'
}

Logo.propTypes = {
  variant: PropTypes.string,
  type: PropTypes.string,
}


export default Logo
