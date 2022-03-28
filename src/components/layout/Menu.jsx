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
            <li>
              <Link to="/parametro/">Parâmetro #01</Link>
            </li>
            <li>
              <Link to="/parametro/">Parâmetro #02</Link>
            </li>
            <li>
              <Link to="/nao-encontrado/">Não encontrado</Link>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
}
