import React from "react";
import PropTypes from "prop-types";

export class Home extends React.Component {
	constructor(props) {
		super();
		this.age = props.age;
		this.state = {
			age: props.age,
			status:0,
		}
		setTimeout(() =>this.setState({
			status: 1,
		}),3000);
	}

	onMakeOlder() {
		this.setState({
			age: this.state.age + 3,
		});
	}

	onHoverButton() {
		this.age += 100;
		this.setState({
			age: this.state.age + 100,
			status: 1-this.state.status,
		});
	}

	render() {
		return(
			<div className="container">
				<h2>Home Component!</h2>
				<p>Your name is {this.props.name}</p>
				<p>Your age is: {this.state.age}</p>
				<p>Status: {this.state.status}</p>
				<hr/>
				<button onClick={this.onMakeOlder.bind(this)} className="btn btn-primary">Make me older!</button>&nbsp;&nbsp;&nbsp;
				<button onMouseOver={this.onHoverButton.bind(this)} className="btn btn-primary">Hover on Me!</button>
			</div>
		);
	}
}

Home.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
}