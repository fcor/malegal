import React from 'react'
import Rodal from 'rodal';
import getMemberInfo from '../utils/team.js'
import 'rodal/lib/rodal.css'
import avatar from '../assets/img/manLarge.png'
import mail from '../assets/img/mail.png'

const teamMembers = ['Daniela',
                     'Maria',
                     'Ana',
                     'Natalia',
                     'Edgar',
                     'Laura'
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
              <Modal name={member} />
            </Rodal>
            <div className="team-box column">
              <Header />
              <Cards onClick={this.onClick} />
            </div>
          </div>
      </div>
    )
  }
}

const Header = () =>
  <h1 className="team-header">
    NUESTRO EQUIPO
  </h1>

const Cards = ({ onClick }) =>
  <div className="team-cards">
    {teamMembers.map( (item) => {
      const member = getMemberInfo(item)
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

const Modal = ({ name }) => {
  const member = getMemberInfo(name)

  return(
    <div className="team-modal row">
      <div className="modal-left column">
        <img
          src={avatar}
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

const MemberText = ({name, position, variant}) =>
<div className={`team-card-text ${variant}`}>
  <h1>
    {name}
  </h1>
  <p>
    {position}
  </p>
</div>

export default Team
