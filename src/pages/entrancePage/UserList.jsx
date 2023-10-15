import React from 'react'
import { useSelector } from 'react-redux';

export default function UserList() {
    const { users,loggedUser } = useSelector(state => state.userSlice);

    return (
        <div>
            {
                users.map((user,i) => (
                    <div key={i}>
                         <div>{user.email}</div> <br /><br />
                        <div>{user.password}</div>
                    </div>
                ))
            }
        </div>
    )
}
