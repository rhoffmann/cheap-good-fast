// this is our main react entry point for our app

import React from 'react';
import ReactDOM from 'react-dom';

const Index = () => {
  return <h1>Hello React!</h1>;
};

ReactDOM.render(<Index />, document.getElementById('app'));
