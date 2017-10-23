import React from 'react';
import ReactDOM from 'react-dom';
import Homepage from './Homepage';

document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Homepage),
    document.getElementById('homepage-react')
  );
});
