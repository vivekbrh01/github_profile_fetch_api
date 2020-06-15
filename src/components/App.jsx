import React from "react";
import User from "./User";
export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			userName: [
				"vivekbrh01",
				"anupamroy8",
				"sanjibroy360",
				"maxagno3",
				"titarakshay",
				"saurabhgupta26",
			],
			userInfo: null,
		};
	}

	componentDidMount() {
		console.log("did mount");

		fetch("https://api.github.com/users/vivekbrh01")
			.then((res) => res.json())
			.then((userInfo) => this.setState({ userInfo }));
	}
	handleClick(props) {
		console.log("Click", props);
		fetch(`https://api.github.com/users/${props}`)
			.then((res) => res.json())
			.then((userInfo) => this.setState({ userInfo }));
	}
	render() {
		return (
			<div className="container ">
				<div className="btn_wrapper">
					{this.state.userName.map((data) => (
						<button className="btn" onClick={() => this.handleClick(data)}>
							{data}
						</button>
					))}
					{this.state.userInfo ? (
						<User details={this.state.userInfo} />
					) : (
						<h2>Loading...</h2>
					)}
				</div>
			</div>
		);
	}
}
