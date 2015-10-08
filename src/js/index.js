'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/HelloWorld';

const mountNode = document.getElementById('test');

ReactDOM.render(
<HelloWorld />,
  mountNode
);
