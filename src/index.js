import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const WidgetDivs = document.querySelectorAll('.hbz_widget')

WidgetDivs.forEach(Div => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    Div
  );
})
