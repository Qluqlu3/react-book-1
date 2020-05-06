import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyParent from './MyParent';
import MyFrom from './MyForm';


ReactDOM.render(
  <React.StrictMode>
    <App />
	 <MyParent />
	 <MyFrom />
  </React.StrictMode>,
  document.getElementById('root')
);

