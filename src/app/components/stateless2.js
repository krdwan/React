import React from "react";
import PropTypes from "prop-types";

export const Stateless2 = function(props) {
	return(
		<button onClick={props.func} className="btn btn-primary">{props.name}</button>
	);
}

Stateless2.propTypes = {
	name: PropTypes.string,
	func: PropTypes.func,
}