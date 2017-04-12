import React, { Component } from 'react';
import './App.css'
import Items from '../containers/Items';

export default class App extends Component {

  render() {
    return (
      <div className="App-mainbody">
        <Items />
      </div>
    )
  }

}
