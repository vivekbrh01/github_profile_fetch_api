import React from "react";

function User(props) {
	return (
		<div className="container">
			<h1>
				<em>User profile</em>{" "}
			</h1>
			<div className="profile">
				<img
					className="userImage"
					src={props.details.avatar_url}
					alt="userImage"
				/>
				<div className="infoWrapper">
					<h2>
						<span className="userName">Name:</span> {props.details.name}
					</h2>
					<h3>
						<span className="userBio">Bio:</span> {props.details.bio}
					</h3>
					<h3>
						<span className="userBio">Location:</span> {props.details.location}
					</h3>
					<h3>
						<span className="userBio">Repositories:</span>{" "}
						{props.details.public_repos}
					</h3>
					<h4>
						<span className="time">Last updated at:</span>{" "}
						{props.details.updated_at}
					</h4>
					<a href={props.details.blog}>
						{" "}
						<span>Read More</span>
					</a>
				</div>
			</div>
		</div>
	);
}
export default User;
