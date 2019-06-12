import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import axios from 'axios';

export class App extends Component {
	state = {
		friends    : [],
		fullFriend : {
			name  : '',
			age   : '',
			email : '',
		},
	};

	handleChange = e => {
		this.setState({
			fullFriend : {
				...this.state.fullFriend,
				[e.target.name]: e.target.value,
			},
		});
	};
	postFriend = friend => {
		axios.post('http://localhost:5000/friends', friend).then(res => console.log(res));
	};

	addFriend = e => {
		axios.put('http://localhost:3000/').then(res => console.log(res)).catch(err => console.log(err));
	};

	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => {
				// Do something with the data to receive back
				console.log(res.data);
				this.setState({
					friends : res.data,
				});
			})
			.catch(err => {
				// Handle the error that has been returned
				console.log(err);
			});
	}
	render() {
		return (
			<div className='App'>
				<FriendsList friends={this.state.friends} />
				<FriendForm
					handleChange={this.handleChange}
					postFriend={this.postFriend}
					fullFriend={this.state.fullFriend}
				/>
			</div>
		);
	}
}

export default App;
