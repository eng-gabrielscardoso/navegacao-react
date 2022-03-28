import React, { Component } from 'react';

import './Menu.css';

export default class Menu extends Component {
  render () {
    return (
      <aside className="Menu">
        <nav>
          <ul>
            <li>
              <a href="/">Início</a>
            </li>
            <li>
              <a href="/sobre">Sobre</a>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
