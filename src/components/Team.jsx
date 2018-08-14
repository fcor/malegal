import React from 'react'
import getMemberInfo from '../utils/team.js'

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
      member: null
    }

    this.onClick = this.onClick.bind(this)
  }

  onClick(member){
    // console.log(member);
    this.setState({
      isShowingDetails: true,
      member: member
    })
  }

  render() {
    return(
      <div className="container">
        <div className="team-box column">
          <Header />
          <Cards onClick={this.onClick} />
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
          <div className="team-card-text">
            <h1>
              {member.name}
            </h1>
            <p>
              {member.position}
            </p>
          </div>
        </div>
      )
    })}
  </div>

export default Team
