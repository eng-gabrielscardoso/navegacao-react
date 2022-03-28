import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Menu.css';

export default class Menu extends Component {
  render () {
    return (
      <aside className="Menu">
        <nav>
          <ul>
            <li>
              <Link to="/">Início</Link>
            </li>
            <li>
              <Link to="/sobre">sobre</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
