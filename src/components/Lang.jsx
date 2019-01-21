import React from 'react'

const getCS = (lang, type) => {
  if (lang === type) {
    return 'selected'
  }
  return ''
}

const Lang = ({handleLang, lang}) => 
  <div className="lang-box row">
    <p className={getCS(lang, 'en')} onClick={() => handleLang('en')}>EN</p>
    <p>|</p>
    <p className={getCS(lang, 'es')} onClick={() => handleLang('es')}>ES</p>
  </div>

export default Lang