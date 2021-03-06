import React, {Component} from 'react';
// import logo from './logo.svg';
import GamesPage from './components/Game/GamesPage';
import GamesFormPage from './components/Game/GameFormPage';
import './index.css';
import {Link, Match} from 'react-router';

class Routs extends Component {
  render() {
    return (
      <div className="ui container">

        <div className="ui three item menu">
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/">Home</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games">Games</Link>
          <Link className="item" activeClassName="active" activeOnlyWhenExact to="/games/new">Add New Game</Link>
        </div>

        <Match exactly pattern="/games" component={GamesPage}/>
         <Match pattern="/games/new" component={GamesFormPage}/>
         <Match pattern="/game/:_id" component={GamesFormPage}/>
      </div>
    );
  }
}

export default Routs;
