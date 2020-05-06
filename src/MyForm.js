import React, { Component } from 'react';

export default class MyFrom extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: '山田たろう',
			email: 'yamada@yamada.com'
		};
		this.handleChange = this.handleChange.bind(this);
		this.show = this.show.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		// event.preventDefault();
	}

	show() {
		console.log(`name: ${this.state.name}`);
		console.log(`email: ${this.state.email}`);
	}

	render() {
		return(
			<form>
				<div>
					<label>名前：</label>
					<input id="name" type="text" type="text" onChange={this.handleChange} defaultValue={this.state.name} />
				</div>
				<div>

				<label htmlFor="">メールアドレス：</label>
					<input id="email" type="text" type="mail" onChange={this.handleChange} defaultValue={this.state.email} />
				</div>
				<div>
					<button type="button" onClick={this.show} >
						送信
					</button>
				</div>
			</form>
		);
	}
}