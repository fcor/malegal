import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const TopSection = ({ location }) =>{
  if (location === '/') {
    return(
      <div className="top-section img">
        <div className="container">
          <Navbar variant="home" type="home"  />
          <div className="top-section-text column">
            <div className="top-section-box">
              <div className="box"></div>
              <h1>Construyendo soluciones</h1>
            </div>
            {/* <p>Cupcake ipsum dolor sit amet powder jelly-o. Halvah liquorice macaroon powder donut chupa chups pastry</p> */}
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
