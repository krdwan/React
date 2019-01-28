import React from "react";
import PropTypes from 'prop-types';

export class Header extends React.Component {
	constructor(props) {
		super();
		this.state = {
			homeLink: "Changed Link",
		}
	}

	onChangeName() {
		this.props.changeLink(this.state.homeLink);
	}

	render() {
		return(
			<nav className="navbar navbar-default">
				<div className="container">
					<ul className="nav navbar-nav">
						<li><a href="#">{this.props.homeLink}</a></li>
					</ul>
				</div>
				<div className="container">
					<p>My name is {this.props.name}</p>
					<p>My age is {this.props.age}</p>
					<h3>My hobbies are:</h3>
					<ol>
					{this.props.info.hobbies.map((hob,i)=><li key={i}>{i+"-"+hob}</li>)}
					</ol>
					{this.props.children} (from outside)
					<hr/>
					<button onClick={this.onChangeName.bind(this)} className="btn btn-primary">Change Link</button>
				</div>
			</nav>
		);
	}
}


Header.propTypes = {
	homeLink: PropTypes.string,
	name: PropTypes.string,
	age: PropTypes.number,
	info: PropTypes.object,
	children: PropTypes.element.isRequired
};