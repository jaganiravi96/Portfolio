import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Project from './Project';
import Social from './Social';

ReactDOM.render(<App/>, document.getElementById("root") );
ReactDOM.render(<Project />, document.getElementById("project"));
ReactDOM.render(<Social />, document.getElementById("social"));