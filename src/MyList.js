import React, { Component } from "react";

export default class MyList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			fruit: ['apple', 'melon']
		};
		this.handleChange = this.handleChange.bind(this);
		this.show = this.show.bind(this);
	}


	handleChange(event) {
		const data = [];
		const opts = event.target.options;
		for(let i = 0;i < opts.length;i++ ){
			if(opts[i].selected) {
				data.push(opts[i].value);
			}
		}
		this.setState({
			[event.target.name]: data
		});
	}

	show() {
		console.log(`好きな果物：${this.state.fruit}`);
	}

	render() {
		return(
			<form action="">
				<label htmlFor="">好きな果物：</label>
				<select name="fruit" id="fruit" value={this.state.fruit} size="5" multiple={true} onChange={this.handleChange}>
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