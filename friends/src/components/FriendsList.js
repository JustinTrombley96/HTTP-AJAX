import React, { Component } from 'react';

export class FriendsList extends Component {
	render() {
		return (
			<div>
				<h1>My Friends!</h1>
				{this.props.friends.map(friend => {
					return (
						
						<h6 key={friend.id}>
							My name is {friend.name} I am {friend.age} years old. My email is {friend.email} and my ID
							is {friend.id}.
						</h6>
					);
				})}
			</div>
		);
	}
}

export default FriendsList;
