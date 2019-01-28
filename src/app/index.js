import React from "react";
import { render } from "react-dom";

import { Header } from "./components/Header";
import { Home } from "./components/Home";
import { KevinComp } from "./components/KevinComp";
import { Fifth } from "./components/Fifth";
import { One21 } from "./components/1-21.js";
import { Stateless } from "./components/Stateless.js";
import { Stateless2 } from "./components/Stateless2.js";
import { UpdateParent } from "./components/UpdateParent.js";
import { TextUpdater } from "./components/TextUpdater.js";


import { Fourth } from "./components/Fourth";

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			homeLink: "Home",
			displayMe: "InitialVal",
		}
	}
	greeter() {
		alert("hello there!");
	}

	onChangeLinkName(newName) {
		this.setState({
			homeLink: newName
		})
	};

	onChangeDisplayMe(newVal) {
		this.setState({
			displayMe: newVal,
		});
	}

	render() {
		let item = {
			name:"Blake",
			age:25,
			hobbies:['tennis','swimming'],
		}
		return (
			<div className="container">
				<div className="row">
						<div className="col-s-10 col-xs-offset-1">
							<Header 
								name={"Miss Cat"} 
								age={25} 
								info={item} 
								homeLink={this.state.homeLink}
								changeLink={this.onChangeLinkName.bind(this)}>
								<p>Text in a paragraph!</p>
							</Header>
						</div>
				</div>
				<div className="row">
						<div className="col-s-10 col-xs-offset-1">
							<Home name={'Blake'} age={25}>
							</Home>
						</div>
				</div>
				<div className="row">
						<div className="col-s-10 col-xs-offset-1">
							<KevinComp/>
						</div>
				</div>
				<div className="row">
						<div className="col-s-10 col-xs-offset-1">
							<Fourth/>
						</div>
				</div>
				<div className ="container two">
					<Fifth/>
				</div>
				<div className = "container">
					<One21 number={5}/>
				</div>
				<Stateless bname="Button"/>&nbsp;
				<Stateless2 name="Greeter!" func={this.greeter}/>
				<UpdateParent 
					updateDisplay={this.onChangeDisplayMe.bind(this)} 
					displayMe={this.state.displayMe}
				/>
			</div>
		);
	}
}


class MoreText extends React.Component {
	render() {
		return (
			<div className="container">
				<h2>World!</h2>
			</div>
		);
	}
}

class Recap extends React.Component {
	render() {
		return (
			<TextUpdater/>
		);
	}
}

render(<Recap/>,window.document.getElementById("recap"));
render(<App/>,window.document.getElementById("app"));
render(<MoreText/>,window.document.getElementById("moreText"));