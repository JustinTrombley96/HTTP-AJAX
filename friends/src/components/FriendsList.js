import React from 'react'
import Friend from './Friend'

function FriendsList(props) {
	return (
		<>
			{props.friends.map(friend => <Friend friend={friend} key={friend.id} setUpdateForm={props.setUpdateForm} deleteFriend={props.deleteFriend} /> )}
		</>
	)
}

export default FriendsList
