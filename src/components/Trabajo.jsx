import React from 'react'
import SVG from './SVG'

const Trabajo = () =>
  <div className="work-box row">
    <WorkCard />
    <WorkForm />
  </div>

const WorkCard = () =>
  <div className="work-card column">
    <header>
      TRABAJA CON NOSOTROS
    </header>
    <p>
      Toffee chocolate gingerbread gingerbread halvah chocolate tiramisu marzipan pie. Cake carrot cake cookie tiramisu pie candy canes. I love croissant donut chocolate cake I love topping. Danish chupa chups jelly beans pudding.
      <br/>
      <br/>
      Toffee chocolate gingerbread gingerbread halvah chocolate tiramisu marzipan pie. Cake carrot cake cookie tiramisu pie candy canes. I love croissant donut chocolate cake I love topping. Danish chupa chups jelly beans pudding.
    </p>
    <h2>
      LLENA Y ENVIANOS EL FORMULARIO CON TU CV
    </h2>
    <SVG />
  </div>

const WorkForm = () =>
  <div className="work-form column">

  </div>

export default Trabajo
