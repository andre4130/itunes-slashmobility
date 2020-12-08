import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CardComponent from './CardComponent';
import { getUsers } from '../../redux/actions/users';

const UsersComponent = () => {
    const dispatch = useDispatch();
    const users = useSelector(state => state.users.users);
    const loading = useSelector(state => state.users.loading);
    const error = useSelector(state => state.users.error);

    useEffect(() => {
        dispatch(getUsers())
    }, [])

    return (
        <div>
            {loading && <p>Loading...</p>}
            {users.length > 0 && users.map((user) => (
                <CardComponent user={user} key={user.id} />
            )
            )}
            {users.length === 0 && !loading && <p>No users Available</p>}
            {error && !loading && <p>{error}</p>}
        </div>
    );
};

export default UsersComponent;