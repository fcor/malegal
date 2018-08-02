import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'

const TopSection = ({ location }) =>{
  if (location === '/') {
    return(
      <div className="top-section img">
        <div className="container">
          <Navbar variant="home" />
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
