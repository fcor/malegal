import React from 'react'
import PropTypes from 'prop-types'
import Navbar from './Navbar'
import Lang from './Lang'
// import bg1 from '../assets/img/7.jpg'

const TopSection = ({ location, lang, handleLang }) =>{
  const text1 = lang === 'es' ? 'Navegando Seguro' : 'Dealing with Uncertainty'
  const text2 = lang === 'es' ? 'Construyendo Soluciones' : 'Building Solutions '
  const text3 = lang === 'es' ? 'Su aliado en el mercado local' : 'Partnering up with Foreigners in Colombian Markets'
  if (location === '/') {
    return(
      <div className="top-section img ">
        {/* <img className="bg" src={bg1} /> */}
        <div className="crossfade bg1">
          <Lang lang={lang} handleLang={handleLang} />
          <div className="container">
            <Navbar handleLang={handleLang} lang={lang} variant="home" type="home"  />
            <div className="top-section-text bf column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1 className="bg1-title">{text1}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="crossfade bg2 desktop">
          <Lang lang={lang} handleLang={handleLang} />
          <div className="container">
            <Navbar handleLang={handleLang} lang={lang} variant="home" type="home"  />
            <div className="top-section-text column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1>{text2}</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="crossfade bg3 desktop">
          <Lang lang={lang} handleLang={handleLang} />
          <div className="container">
            <Navbar handleLang={handleLang} lang={lang} variant="home" type="home"  />
            <div className="top-section-text column">
              <div className="top-section-box">
                <div className="box"></div>
                <h1>{text3}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  return(
    <div className="top-section-default">
      <Lang lang={lang} handleLang={handleLang} />
      <div className="container">
        <Navbar handleLang={handleLang} lang={lang} />
      </div>
    </div>
  )
}

TopSection.propTypes = {
  location: PropTypes.string.isRequired,
}

export default TopSection
