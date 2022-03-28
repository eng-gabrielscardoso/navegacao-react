import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import './Content.css';

import About from '../../views/examples/About';
import Home from '../../views/examples/Home';
import Param from '../../views/examples/Param';

export default class Content extends Component {
  render () {
    return (
      <main className="Content">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/parametro/:id" element={<Param />} />
        </Routes>
      </main>
    );
  }
}
