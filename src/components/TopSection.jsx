import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import bg1 from '../assets/img/7.jpg'

const TopSection = ({ location }) =>{
  if (location === '/') {
    return(
      <div className="top-section img bg1">
        {/* <img className="bg" src={bg1} /> */}
        <div className="container">
          <Navbar variant="home" type="home"  />
          <div className="top-section-text column">
            <div className="top-section-box">
              <div className="box"></div>
              <h1>Construyendo soluciones</h1>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="top-section">
      <div className="container">
        <Navbar />
      </div>
    </div>
  )
}

TopSection.propTypes = {
  location: PropTypes.string.isRequired,
}

export default TopSection
