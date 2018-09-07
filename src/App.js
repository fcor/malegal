import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import TopSection from './components/TopSection'
import Footer from './components/Footer'
import About from './components/About'
import Team from './components/Team'
import Areas from './components/Areas'
import Trabajo from './components/Trabajo'
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
        <Router>
          <div className="app">
            <div className="content">
              <Route render={ (props) => {
                return (
                  <TopSection location={props.location.pathname} lang={lang} />
                )
              }} />
              <Route render={({ location }) =>
                <TransitionGroup exit={false}>
                  <CSSTransition key={location.pathname.split('/')[1]} timeout={250} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/"  />
                    <Route path="/areas" render={() => <Areas  lang={lang} />} />
                    <Route path="/equipo" render={() => <Team lang={lang} />}/>
                    <Route path="/trabajo" render={() => <Trabajo lang={lang} />}/>
                    <Route render={() => <h1>Page not found</h1>} />
                  </Switch>
                  </CSSTransition>
                </TransitionGroup>
              }/>
            </div>
            <Footer />
          </div>
        </Router>

    );
  }
}

export default App;
