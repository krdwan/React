import React from "react";
import PropTypes from "prop-types";

export class UpdateParent extends React.Component {
	constructor(props) {
		super();
		this.state = {
			newVal: props.displayMe,
		}
	}

	updateParent() {
		this.props.updateDisplay(this.state.newVal)
	}

	onHandleChange(event) {
		this.setState({
			newVal: event.target.value,
		})
	}

	render() {
		return (
			<div className = "container">
				<hr/>
				Hello World!&nbsp;
				<button onClick={this.updateParent.bind(this)} className="btn btn-primary">A Button!</button>
				<hr/>
				Display Section: {this.props.displayMe} &nbsp;
				<input 
					type="text" 
					value={this.state.newVal} 
					onChange={this.onHandleChange.bind(this)}
				/>
				<hr/>
			</div>
		)
	}
}

UpdateParent.propTypes = {
	displayMe: PropTypes.string,
	updateParent: PropTypes.func,
}