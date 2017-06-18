import React from 'react';
import ReactDOM from 'react-dom';
import Home from './Home';

const render = Component => {
  ReactDOM.render(
    <Home name='Aloha!' />,
    document.getElementById('root')
  )
}
render();

if(module.hot) {
  module.hot.accept();
}
