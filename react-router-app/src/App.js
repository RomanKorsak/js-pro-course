import React from 'react';
import { Link, Route, Switch } from 'react-router-dom'
import {HomePage} from './components/home'
import {AddClicker} from './components/clicker'
import {Notfound} from './components/notfound'
import {Emoji} from './components/emoji'

export function App() {
  return (
    <>
      <header id = 'header'>
        <nav id = 'nav'>
          <Link to="/"> Home </Link>
          <Link to="/clicker"> Clicker </Link>
          <Link to="/emoji"> Emoji </Link>
        </nav>
      </header>
      <div>
        <Switch>
          <Route exact path='/' component = {HomePage} />
          <Route exact path='/clicker' component = {AddClicker} />
          <Route exact path='/emoji' component = {Emoji} /> 
          <Route component = {Notfound}/>
        </Switch>
      </div>
    </>
  );
}