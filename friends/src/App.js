import React, { Component } from 'react';
import './App.css';
import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';

export class App extends Component {
	state = {
		friends      : [],
		error        : '',
		activeFriend : null,
	};
	componentDidMount() {
		axios
			.get('http://localhost:5000/friends')
			.then(res => this.setState({ friends: res.data }))
			.catch(err => this.setState({ error: err }));
	}

	addFriend = (e, friend) => {
		e.preventDefault();
		axios
			.post('http://localhost:5000/friends', friend)
			.then(res => this.setState({ friends: res.data }))
			.catch(err => console.log(err));
	};

	updateFriend = (e, friend) => {
		e.preventDefault();
		axios
			.put(`http://localhost:5000/friends/${friend.id}`, friend)
			.then(res => this.setState({ friends: res.data }))
			.catch(err => console.log(err));
	};

	deleteFriend = (e, id) => {
		e.preventDefault();
		axios
			.delete(`http://localhost:5000/friends/${id}`)
			.then(res => this.setState({ friends: res.data }))
			.catch(err => console.log(err));
	};

	setUpdateForm = (e, friend) => {
		e.preventDefault();
		this.setState({
			activeFriend : friend,
		});
	};

	render() {
		return (
			<div className='App'>
				<h2>Friends List</h2>
				<Link to='/friends-list'>View Friends</Link>

				<Route
					path={'/friends-list'}
					render={props => (
						<><FriendForm {...props} 
						addFriend={this.addFriend}
						updateFriend={this.updateFriend}
						activeFriend={this.state.activeFriend} />
						<FriendsList
							{...props}
							setUpdateForm={this.setUpdateForm}
							deleteFriend={this.deleteFriend}
							friends={this.state.friends}
						/>
						</>
					)}
				/>
		
			
			</div>
		);
	}
}

export default App;
