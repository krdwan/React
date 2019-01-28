import React from "react";
import PropTypes from "prop-types";
import {TextUpdaterHelper} from "./TextUpdaterHelper.js";

export class TextUpdater extends React.Component {
	constructor() {
		super();
		let initialVal = this.randomNumber();
		this.state = {
			displayVal: initialVal,
		};
	}

	updateDisplay(newVal=null) {
		if (!newVal) {
			newVal = this.randomNumber();
		}
		this.setState({
			displayVal: newVal,
		});
	}

	randomNumber() {
		let num = Math.round(Math.random()*10000) % 10000;
		return num;
		// if (Math.floor(num / 1000)) {
		// 	num = String(Math.floor(num/1000)) + "," + 
		// 		(num % 1000 < 100 ? "0" : "") + String(num%1000);
		// }
		// return String(num);
	}

	render() {
		return(		
			<TextUpdaterHelper
				updateDisplay = {this.updateDisplay.bind(this)}
				displayVal = {this.state.displayVal}
			/>
		);
	}
}