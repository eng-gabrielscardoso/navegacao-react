import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './Content.css';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';

export default class Content extends Component {
  render () {
    return (
      <main className="Content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
        </Routes>
      </main>
    );
  }
}