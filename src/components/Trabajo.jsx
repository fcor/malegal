import React from 'react'
import SVG from './SVG'

const getInputDetails = (type) => {
  if (type === 'name') {
    return {
      id: 'name',
      type: 'text',
      label: 'NOMBRE *',
      placeholder: 'Escribe tu nombre'
    }
  } else if (type === 'email') {
    return {
      id: 'email',
      type: 'email',
      label: 'CORREO ELECTRÓNICO *',
      placeholder: 'Escribe tu correo'
    }
  } else {
    return {
      id: 'phone',
      type: 'tel',
      label: 'TELÉFONO *',
      placeholder: 'Escribe tu teléfono'
    }
  }
}

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
  <div className="work-form">
    <div className="rect"></div>
    <header>FORMULARIO</header>
    <div className="column">
      <Input variant="name" />
      <Input variant="email" />
      <Input variant="phone" />
      <Submit />
      <TextArea />
      <button className="submit">
        ENVIAR
      </button>
    </div>
  </div>

const Input = ({variant}) => {
  const input = getInputDetails(variant)
  return(
    <div className="work-form-input column">
      <label htmlFor={input.id} className="work-form-labels">
        {input.label}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
      />
    </div>
  )
}

const Submit = () =>
  <div className="work-form-submit column">
    <p className="work-form-labels">
      ADJUNTA TU CV
    </p>
    <button>Adjuntar archivo</button>
  </div>

const TextArea = () =>
  <div className="work-form-textarea column">
    <label htmlFor="textarea" className="work-form-labels">
      ¿POR QUÉ QUIERES UNIRTE A NOSOTROS?
    </label>
    <textarea
      id="textarea"
    />
  </div>

export default Trabajo
