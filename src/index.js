import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/layout/App';

const rootEl = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    rootEl
  );
};

if (module.hot) {
  module.hot.accept('./app/layout/App', () => {
    setTimeout(render);
  });
}

render();

