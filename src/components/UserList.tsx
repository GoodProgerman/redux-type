import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { fetchUsers } from '../store/action-creators/user';
import { User } from '../types/user'

const UserList: FC = () => {
	const { users, error, loading } = useTypedSelector(state => state.user)
	// const dispatch = useDispatch();
	const { fetchUsers } = useActions()

	useEffect(() => {
		fetchUsers() /* as any */
	}, [])

	if (loading) {
		return <h1>loading...</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}
	return (
		<div>
			{(users as User[]).map(user =>
				<div key={user.id}>{user.id} - {user.name}</div>
			)}
		</div>
	)
}

export default UserList

// When I`m destructurizing selector, autocomplete is not working

