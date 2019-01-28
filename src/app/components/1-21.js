import React from "react";
import PropTypes from "prop-types";

export class One21 extends React.Component {
	constructor(props) {
		super();
		this.state = {
			number: props.number,
		}
	}

	coolButton() {
		this.setState({
			number: this.state.number+1,
		})

	}

	amazButton() {
		this.state.number = this.state.number-5;
		console.log(this.state.number);
	}

	render() {
		return (
			<div className="container">
				<p>The Number is: {this.state.number}</p>
				<button onClick={this.coolButton.bind(this)} className="btn btn-primary">Cool button!</button>&nbsp;&nbsp;
				<button onClick={this.amazButton.bind(this)} className="btn btn-primary">Amazing button!</button>
				<hr/>
			</div>
		)
	}
}

One21.propTypes = {
	number: PropTypes.number,
}