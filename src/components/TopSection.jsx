import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import bg1 from '../assets/img/7.jpg'

const TopSection = ({ location }) =>{
  if (location === '/') {
    return(
      <div className="top-section img ">
        {/* <img className="bg" src={bg1} /> */}
        <div className="crossfade bg1">
          <div className="container">
            <Navbar variant="home" type="home"  />
            <div className="top-section-text bf column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1 className="bg1-title">Navegando Seguro</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="crossfade bg2">
          <div className="container">
            <Navbar variant="home" type="home"  />
            <div className="top-section-text column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1>Construyendo Soluciones</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="crossfade bg3">
          <div className="container">
            <Navbar variant="home" type="home"  />
            <div className="top-section-text bf column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1>Su aliado en el mercado local</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="top-section-default">
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
