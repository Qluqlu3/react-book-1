import React, { Component } from "react";

export default class MyTextarea extends Component {
	constructor(props) {
		super(props);
		this.state = {
			memo: "Reactは人気のフレームワークです…"
		};
		this.handleChange = this.handleChange.bind(this);
		this.show = this.show.bind(this);
	}

	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	show() {
		console.log(`メモ：${this.state.memo}`);
	}

	render() {
		return(
			<form action="">
				<label htmlFor="">メモ：</label>
				<textarea name="memo" id="mome" cols="30" rows="10" defaultValue={this.state.memo} onChange={this.handleChange} >

				</textarea>
				<button type="button" onClick={this.show}>送信</button>
			</form>
		);
	}
}