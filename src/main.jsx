import React from 'react';
import ReactDOM from 'react-dom';

import NavigationBar from './components/NavigationBar';
import Hello from './Hello';


ReactDOM.render(
  <div>
      <NavigationBar />
      <Hello />
  </div>,
  document.getElementById('example')
);
