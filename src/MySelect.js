import React, { Component } from "react";

export default class MySelect extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fruit: 'apple'
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
		console.log(`好きな果物 ${this.state.fruit}`);
	}

	render(){
		return(
			<form action="">
				<label>好きな果物：</label>
				<select name="fruit" id="fruit" value={this.state.fruit} onChange={this.handleChange}>
					<option value="apple">りんご</option>
					<option value="orenge">オレンジ</option>
					<option value="melon">メロン</option>
					<option value="grape">ぶどう</option>
					<option value="strawberry">イチゴ</option>
				</select>
				<button type="button" onClick={this.show}>送信</button>
			</form>
		);
	}
}