import React from 'react';
import Form from '../Form';
import Lista from '../Lista';
import style from './App.module.scss';

function App() {
  return (
    <div className={style.AppStyle}>
      <Form />
      <Lista />
    </div>
  );
}

export default App;
