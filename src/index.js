import React from 'react';
import ReactDOM from 'react-dom';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

function consoleLog(){
  console.log('this is a console log on click')
}

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={consoleLog} />
  </div>,
  document.getElementById('root')
);