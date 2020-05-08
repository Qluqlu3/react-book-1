import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MyParent from './MyParent';
import MyFrom from './MyForm';
import MyTextarea from './MyTextarea';
import MySelect from './MySelect';
import MyList from './MyList';

ReactDOM.render(
	<React.StrictMode>
		<App />
		<MyParent />
		<MyFrom />
    <MyTextarea />
    <MySelect />
    <MyList />
	</React.StrictMode>,
	document.getElementById('root')
);
