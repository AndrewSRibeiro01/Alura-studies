import React from 'react';
import Form from '../Form';
import Lista from '../Lista';
import style from './App.module.scss';
import Cronometro from '../Cronometro';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
