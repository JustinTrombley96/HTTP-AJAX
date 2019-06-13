import React, { Component } from 'react';
// import axios from 'axios';

export class FriendForm extends Component {
	// state = {
	// 	fullFriend : {
	// 		name  : '',
	// 		age   : '',
	// 		email : '',
	// 	},
	// };

	// handleChange = e => {
	// 	this.setState({
	// 		fullFriend : {
	// 			...this.state.fullFriend,
	// 			[e.target.name]: e.target.value,
	// 		},
	// 	});
	// };

	// postFriend = friend => {
	// 	axios.post('http://localhost:5000/friends', friend).then(res => {
	// 		console.log(res).catch(err => {
	// 			console.log(err);
	// 		});
	// 	});
	// 	this.state.postFriend(this.state.fullFriend);
	// };

	// putFriend = newFriend => {
	// 	axios.put('http://localhost:3000', newFriend).then(res => console.log(res)).catch(err => console.log(err));
	// 	this.state.putFriend(this.state.fullFriend);
	// };

	postFriend = e => {
		e.preventDefault();

		this.props.postFriend(this.props.fullFriend);
		window.location.reload()

	};
	addFriend = e => {
		e.preventDefault();
	

		this.props.addFriend(this.props.fullFriend);

	};

	render() {
		return (
			<div>
				<form onSubmit={this.postFriend}>
					<h1>Add a New Friend!</h1>
					<input
						type='text'
						placeholder='Name'
						onChange={this.props.handleChange}
						value={this.props.fullFriend.name}
						name='name'
					/>
					<input
						type='number'
						placeholder='Age'
						onChange={this.props.handleChange}
						value={this.props.fullFriend.age}
						name='age'
					/>
					<input
						type='text'
						placeholder='Email'
						onChange={this.props.handleChange}
						value={this.props.fullFriend.email}
						name='email'
					/>
					<button>Create New Friend</button>
				</form>
			</div>
		);
	}
}

export default FriendForm;
