import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Menu from '../components/layout/Menu';
import Content from '../components/layout/Content';

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <BrowserRouter>
          <Menu />
          <Content />
        </BrowserRouter>
      </div>
    );
  }
}
