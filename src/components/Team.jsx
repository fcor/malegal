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
  render() {
    return(
      <div className="container">
        <div className="team-box column">
          <Header />
          <Cards />
        </div>
      </div>
    )
  }
}

const Header = () =>
  <h1 className="team-header">
    NUESTRO EQUIPO
  </h1>

const Cards = () =>
  <div className="team-cards">
    {teamMembers.map( (item) => {
      const member = getMemberInfo(item)
      return (
        <div className="team-card column">
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
