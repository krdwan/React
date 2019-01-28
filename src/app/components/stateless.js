import React from "react";
import PropTypes from "prop-types";

export const Stateless = (props) => {
	return (
		<button className="btn btn-primary">Useless: {props.bname}!</button>
	);
};

Stateless.propTypes = {
	bName: PropTypes.string,
};