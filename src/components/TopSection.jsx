import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const TopSection = ({ location }) =>{
  if (location === '/') {
    return(
      <div className="top-section img">
        <div className="container">
          <Navbar variant="home" />
          <div className="top-section-text">
            <h1>Construyendo Soluciones</h1>
            <p>Firma multidisciplinaria y especializada, con experiencia, tanto en la consultoria como en el litigio.</p>
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
