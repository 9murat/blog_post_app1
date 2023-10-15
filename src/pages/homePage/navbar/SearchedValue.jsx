import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function SearchedValue({ user }) {
    const navigate = useNavigate();
    return (
        <div className='searched_value_container' onClick={() => navigate(`userDetail/${user.id}`)}>
            <div>{user.name}</div>
            <div>{user.lastName}</div>
        </div>
    )
}
