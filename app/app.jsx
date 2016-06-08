import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';


// Load foundation
$(document).foundation();

// Application Styles css
require('style!css!sass!applicationStyles');

ReactDOM.render(
  <p>BoilerPlate Project</p>,
  document.getElementById('app')
);
