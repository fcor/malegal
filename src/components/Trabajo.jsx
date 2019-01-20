import React from 'react'
import SVG from './SVG'
import swal from 'sweetalert2'

const getInputDetails = (type, lang) => {
  if (type === 'name') {
    if (lang === 'en') {
      return {
        id: 'name',
        type: 'text',
        label: 'NAME *',
        placeholder: 'Write your name'
      }  
    }
    return {
      id: 'name',
      type: 'text',
      label: 'NOMBRE *',
      placeholder: 'Escribe tu nombre'
    }
  } else if (type === 'email') {
    if (lang === 'en') {
      return {
        id: 'email',
        type: 'email',
        label: 'EMAIL *',
        placeholder: 'Write your email'
      }  
    }
    return {
      id: 'email',
      type: 'email',
      label: 'CORREO ELECTRÓNICO *',
      placeholder: 'Escribe tu correo'
    }
  } else {
    if (lang === 'en') {
      return {
        id: 'phone',
        type: 'tel',
        label: 'PHONE NUMBER *',
        placeholder: 'Write your phone number'
      }  
    }
    return {
      id: 'phone',
      type: 'tel',
      label: 'TELÉFONO *',
      placeholder: 'Escribe tu teléfono'
    }
  }
}

class Trabajo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      isFileLoaded: false,
      isLoadingFile: null,
      fileName: '',
      text: ''
    }
    this.handleSelectedFile = this.handleSelectedFile.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.uploadFile = this.uploadFile.bind(this)
    this.handleTyping = this.handleTyping.bind(this)
    this.sendMail = this.sendMail.bind(this)
    this.clearState = this.clearState.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  clearState(){
    console.log('Hola')
    
  }

  sendMail(){
    const {name, email, phone, fileName, text} = this.state
    const data = {
                    name,
                    email, 
                    phone,
                    text,
                    fileName
                  }
    fetch('https://killpop-api.glitch.me/sendMail',{
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
        }
      }
    )
      .then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
        swal({
          title: "Perfecto!",
          text: "Tu mensaje se ha enviado!",
          type: "success",
          confirmButtonText: 'Ok',
        })
        this.setState({
          name: '',
          email: '',
          phone: '',
          isFileLoaded: false,
          isLoadingFile: null,
          fileName: '',
          text: ''
        })
      })
  }

  handleSubmit(){
    const { name, email, phone, fileName, text } = this.state
    if(name && email && phone && fileName && text){
      // console.log('Send email')
      this.sendMail()
    } else{
      // console.log('Cannot send email')
      swal({
        title: "Oops :(",
        text: "Llena todos los campos para continuar!",
        type: "error",
        confirmButtonText: 'Ok',
      })
    }
  }

  uploadFile(file){
    const data = new FormData()
    data.append('upload', file)
    fetch('https://killpop-api.glitch.me/uploadFile', {
      method: 'POST',
      body: data 
      }).then(
        response => response.json() // if the response is a JSON object
      ).then(
        success => {
          console.log(success) // Handle the success response object
          this.setState({
            isLoadingFile: false,
            isFileLoaded: true,
            fileName: file.name
          })
        }
      ).catch(
        error => console.log(error) // Handle the error response object
      )
  }

  handleTyping(e, field){
    this.setState({
      [field]: e.target.value
    })
  }

  handleSelectedFile(e){
    e.preventDefault();
    const file = e.target.files[0]
    
    this.setState(() => {
      return {isLoadingFile: true, isFileLoaded:false}
    }, () => this.uploadFile(file))
  }

  render() {
    const { isFileLoaded, fileName, isLoadingFile, name, email, phone, text } = this.state
    const { lang } = this.props
    return(
      <div className="work-box row">
        <WorkCard lang={lang} />
        <WorkForm
          handleSubmit={this.handleSubmit}
          handleSelectedFile={this.handleSelectedFile}
          handleTyping={this.handleTyping}
          isFileLoaded={isFileLoaded}
          isLoadingFile={isLoadingFile}
          fileName={fileName}
          name={name}
          email={email}
          phone={phone}
          text={text}
          lang={lang}
        />
      </div>
    )
  }
}

const WorkCard = ({lang}) => {
  const header = lang === 'es' ? 'TRABAJA CON NOSOTROS' : 'JOIN US'
  const text = lang === 'es' 
    ? 'En Muñoz Aya buscamos personas comprometidas con el conocimiento y la excelencia, que busquen un espacio  para aprender y crecer junto a nosotros.  Si quieres ser parte de nuestro equipo, envíanos tu hoja de vida y nos pondremos en contacto contigo.' 
    : 'We are committed to attracting the best people across our practices. If you are looking for a career at Muñoz Aya, please contact us.'
  const text2 = lang === 'es' ? 'LLENA Y ENVÍANOS EL FORMULARIO CON TU CV' : 'APPLY NOW'
  return (
    <div className="work-card column">
      <header>
        {header}
      </header>
      <p>
        {text}        
      </p>
      <h2>
        {text2}
      </h2>
      <SVG />
    </div>
  )
}

const WorkForm = ({handleSubmit, handleTyping, handleSelectedFile, isLoadingFile, isFileLoaded, fileName, name, mail, phone, text, lang}) =>
  <div className="work-form">
    <div className="rect"></div>
    <header>{lang === 'es' ? 'FORMULARIO' : 'CONTACT FORM'}</header>
    <div className="column">
      <Input variant="name" lang={lang} value={name} handleTyping={handleTyping} />
      <Input variant="email" lang={lang} value={mail} handleTyping={handleTyping} />
      <Input variant="phone" lang={lang} value={phone} handleTyping={handleTyping} />
      <Submit 
        handleSelectedFile={handleSelectedFile} 
        isFileLoaded={isFileLoaded}
        isLoadingFile={isLoadingFile}
        fileName={fileName}
        lang={lang}
      />
      <TextArea value={text}  handleTyping={handleTyping} lang={lang}/>
      <button onClick={handleSubmit} className="submit">
        {lang === 'es' ? 'ENVIAR' : 'SEND'}
      </button>
    </div>
  </div>

const Input = ({variant, handleTyping, value, lang}) => {
  const input = getInputDetails(variant, lang)
  return(
    <div className="work-form-input column">
      <label htmlFor={input.id} className="work-form-labels">
        {input.label}
      </label>
      <input
        type={input.type}
        placeholder={input.placeholder}
        id={input.id}
        value={value}
        onChange={(e)=> handleTyping(e, variant)}
      />
    </div>
  )
}

const Submit = ({handleSelectedFile, isLoadingFile, isFileLoaded, fileName, lang}) =>
  <div className="work-form-submit column">
    <p className="work-form-labels">
      {lang === 'es' ? 'ADJUNTA TU CV' : 'ATTACH YOUR RESUME'}
    </p>
    <div className="row">
      <label htmlFor="file-upload">
        {lang === 'es' ? 'Adjuntar archivo' : 'Attach file '}
      </label>
      <input 
        id="file-upload" 
        type="file" 
        name="upload" 
        onChange={handleSelectedFile} 
      />
      {isLoadingFile &&
        <p className="file">{lang === 'es' ? 'Cargando...' : 'Loading...'}</p>
      }
      {isFileLoaded &&
        <p className="file">{fileName}</p>
      }
    </div>
  </div>

const TextArea = ({handleTyping, value, lang}) =>
  <div className="work-form-textarea column">
    <label htmlFor="textarea" className="work-form-labels">
      {lang === 'es' ? '¿POR QUÉ QUIERES UNIRTE A NOSOTROS?' : 'WHY DO YOU WANT TO JOIN US?'}
    </label>
    <textarea
      id="textarea"
      value={value}
      onChange={(e)=> handleTyping(e, "text")}
    />
  </div>

export default Trabajo
