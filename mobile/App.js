import React from 'react';
import 'intl';
import 'intl/locale-data/jsonp/pt-BR'; //importando idioma da biblioteca de internacionalização

import Routes from './src/routes';

export default function App() {
  return (
      <Routes/>
  );
}
