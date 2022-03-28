/**
 * Componente funcional, pois o hook useParams não pode ser utilizado junto de um componente em classe
 * 
 * Sorry ¯\_(ツ)_/¯
 */

import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import './Param.css';

const Param = (props) => {
  let { id } = useParams();

  if (isNaN(id) || id === undefined) {
    id = '';
  }

  return (
    <div className="Param">
      <h1>Parâmetros</h1>
      <p>Valor: { id }</p>
    </div>
  );
}

export default Param;
