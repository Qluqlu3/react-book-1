import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const dom = document.querySelector('#root');

const message = "メッセージを表示します。";

const msg = {
	fontSize: "20pt",
	fontWeight: "bold",
	color: "red",
	border: "2px solid green",
}

let printMsg = function(msg, size, color) {
	const style = {
		fontSize: size + "pt",
		fontWeight: "700",
		color: color,
		border: '1px solid' + color,
	};
	return <p style={style}>{msg}</p>
}

const el =(
	<div>
		{printMsg('最初のメッセージ', 30, '#ddd')}
		{printMsg('次のメッセージです。', 20, '#aaa')}
		{printMsg('最後のメッセージ', 14, '#333')}
	</div>
);

// let dom = document.querySelector('#root');
// let element = React.createElement(
// 	'p', null, 'Hello React Application'
// );

// const dom = document.querySelector('#root');

// const message = "新しいメッセージ";
// const link = "http://google.com";

// const msg_s = {
// 	fontSize: "20px",
// 	color: "red",
// 	border: "1px solid blue",
// }

// const el = (
// 	<div>
// 		<h2 style={msg_s}>{message}</h2>
// 		{/* <p>
// 			<a href={link}>this is link</a>
// 		</p> */}
// 	</div>
// )



// let title = "新タイトル";
// let message = "新しいメッセージ";

// let el = (
// 	<div>
// 		<h2>{title}</h2>
// 		<p>{message}</p>
// 	</div>
// );

// let dom = document.querySelector('#root');
// let el = (
// 	<div>
// 		<h2>JSX sample</h2>
// 		<p>This is sample message.</p>
// 	</div>
// );

ReactDOM.render (
	el,
	dom
);


// ReactDOM.render(
// 	<App />,
// 	document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
