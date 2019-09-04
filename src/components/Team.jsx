import React from 'react'
import Rodal from 'rodal';
import getMemberInfo from '../utils/team.js'
import 'rodal/lib/rodal.css'
import mail from '../assets/img/mail.png'

const teamMembers = ['Daniela',
                     'Maria',
                     'Sebastian',
                     'Edgar',
                     'Ligia'
                    ]

class Team extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      isShowingDetails: false,
      member: 'Daniela'
    }

    this.onClick = this.onClick.bind(this)
    this.onClose = this.onClose.bind(this)
  }

  componentDidMount(){
    window.scrollTo(0, 0)
  }

  onClick(member){
    // console.log(member);
    this.setState({
      isShowingDetails: true,
      member: member
    })
  }

  onClose(){
    // console.log(member);
    this.setState({
      isShowingDetails: false,
    })
  }

  render() {
    const { isShowingDetails, member } = this.state
    const  { lang } = this.props

    return(
      <div className="team">
        <div className="container">
          <Rodal
            visible={isShowingDetails}
            onClose={this.onClose}
            animation="slideDown"
            width={725}
            height={570}
            >
              <Modal name={member} lang={lang} />
            </Rodal>
            <div className="team-box column">
              <Header lang={lang} />
              <Cards onClick={this.onClick} lang={lang} />
            </div>
          </div>
      </div>
    )
  }
}

const Header = ({ lang }) => {
  const text = lang === 'es' ? 'NUESTRO EQUIPO' : 'OUR TEAM'
  return (
    <h1 className="team-header">
      {text}
    </h1>
  )
}

const Cards = ({ onClick, lang }) =>
  <div className="team-cards">
    {teamMembers.map( (item) => {
      const member = getMemberInfo(item, lang)
      return (
        <div
          key={item}
          onClick={() => onClick(item)}
          className="team-card column">
          <img
            src={member.avatar}
            alt="avatar"
            className="team-card-avatar"
          />
          <MemberText
            name={member.name}
            position={member.position}
            variant=""
          />
        </div>
      )
    })}
  </div>

const Modal = ({ name, lang }) => {
  const member = getMemberInfo(name, lang)

  return(
    <div className="team-modal row">
      <div className="modal-left column">
        <img
          src={member.modal}
          alt="avatar"
          className="modal-avatar"
        />
        <MemberText
          name={member.name}
          position={member.position}
          variant="modal"
        />
        <div className="modal-contact row">
          <img
            src={mail}
            alt="icon"
            className="modal-icon"
          />
          <p className="modal-contact-text">
            {member.email}
          </p>
        </div>
      </div>
      <div className="modal-right column">
        <MemberText
          name={member.name}
          position={member.position}
          variant="title"
        />
        <p className="modal-bio">
          {member.bio}
        </p>
      </div>
    </div>
  )
}

const MemberText = ({name, position, variant}) => {
  let fontSize = ''
  if (name === 'Daniela Guerrero Ordoñez' && variant === 'modal') {
    fontSize = 'small'
  }
  return(
    <div className={`team-card-text ${variant} ${fontSize}`}>
      <h1>
        {name}
      </h1>
      <p>
        {position}
      </p>
    </div>
  )
}

export default Team
