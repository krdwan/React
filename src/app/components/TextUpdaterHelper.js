import React from "react";
import PropTypes from "prop-types";

export class TextUpdaterHelper extends React.Component {
	constructor() {
		super();
		var initialInputVal = "Enter Text Here";
		this.state = {
			inputVal: initialInputVal,
		}
	}

	onUpdateText(event) {
		this.setState({
			inputVal: event.target.value,
		})
	}

	onClickButton(event) {
		if (event.target.textContent == "Reset") {
			this.props.updateDisplay();
		} else {
			this.props.updateDisplay(this.state.inputVal);
		}
	}

	render() {
		return (
			<div className="container">
				Current Text: {this.props.displayVal}
				<hr/>
				<button 
					onClick={this.onClickButton.bind(this)}
					className="btn btn-secondary">Reset</button>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<button 
					onClick={this.onClickButton.bind(this)}
					className="btn btn-primary">Set Value</button>
				&nbsp;
				<input
					type = "text"
					value = {this.state.inputVal}
					onChange = {this.onUpdateText.bind(this)}
				/>
			</div>
		)
	}
}

TextUpdaterHelper.propTypes = {
	updateDisplay: PropTypes.func,
	displayVal: PropTypes.string,
}

/*
Cascading Events
Bubbling Events
OOP
Inheritance
Polymorphism (not important in FE)

Data Structures in FE
1. Array
2. Object

Fun Exercises:
Digital Clock
Click arrow buttons and something on the page moves around
Highlight, and unlight some areas to create digital clock

Click events
*/