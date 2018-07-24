import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Navbar from './components/Navbar'
import './App.css'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      lang: 'es',
    }
    this.handleLang = this.handleLang.bind(this)
  }

  handleLang(newLang){
    this.setState(state => {
      if (state.lang === newLang) {
        return null;
      }
      return {
        lang: newLang
      }
    })
  }
  render() {
    const { lang } = this.state
    return (
      <div className="contenedor">
        <Router>
          <div>
            <Navbar />
            <Route render={({ location }) =>
              <TransitionGroup exit={false}>
                <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                <Switch location={location}>
                  <Route exact path="/" render={() => <About lang={lang} />} />
                  <Route path="/areas" render={() => <Areas  lang={lang} />} />
                  <Route path="/equipo" render={() => <Equipo lang={lang} />}/>
                  <Route path="/trabajo" render={() => <Trabajo lang={lang} />}/>
                  <Route render={() => <h1>Page not found</h1>} />
                </Switch>
                </CSSTransition>
              </TransitionGroup>
            }/>
          </div>
        </Router>

        <Footer />
      </div>
    );
  }
}

const About = () =>
  <div>
    Acá va el About
  </div>

const Areas = () =>
  <div>
    Acá va el Areas
  </div>

const Equipo = () =>
  <div>
    Acá va el Equipo
  </div>

const Trabajo = () =>
  <div>
    Acá va el Trabajo
  </div>

const Footer = () =>
  <div>
    Acá va el Footer
  </div>

export default App;
