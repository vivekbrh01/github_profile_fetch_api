import React from "react";

function User(props) {
	return (
		<div className="container">
			<h1>User profile</h1>
			<div className="profile">
				<img src={props.details.avatar_url} alt="userImage" />
				<h2>Name: {props.details.name}</h2>
				<h3>Bio: {props.details.bio}</h3>
				<h3>Location: {props.details.location}</h3>
				<h4>Repositories: {props.details.public_repos}</h4>
				<h4>Last updated at: {props.details.updated_at}</h4>
				<a href={props.details.blog}>Click for more</a>
			</div>
		</div>
	);
}
export default User;
