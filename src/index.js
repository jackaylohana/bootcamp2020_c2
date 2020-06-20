import React from 'react'; 
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Components/Demo'

import * as serviceWorker from './serviceWorker';

ReactDOM.render( 
  <h1><App name= "Jack" age={24}/></h1>, 
  <h2><Demo/></h2>,
    document.getElementById('root')
);

serviceWorker.unregister();
