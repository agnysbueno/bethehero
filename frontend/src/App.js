import React from 'react';
import './global.css';

import Routes from './routes';
//não precisa colocar o arquivo index, pq quando importa uma pasta ele sempre procura por um index

function App() {
  return (
    <Routes />
  );
}

export default App;
