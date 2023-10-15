import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import SearchedValue from './SearchedValue';


export default function NavbarLeft() {
    const [searchText, setSearchText] = useState('');

    const { users } = useSelector(state => state.userSlice);
    const searchedUser = users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()));

    const navigate = useNavigate();
    return (
        <div className='navbar_left_container'>
            <div className='logo' onClick={() => navigate('/')}>
                My Blog App
            </div>
            <div className='search-wrapper'>
                <BsSearch className='search icon' />
                <input
                    type="search"
                    className='search-input'
                    placeholder='Search Blog...'
                    value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
            <div>
                {searchText !== '' &&
                    <div>
                        {
                            searchedUser.map((user, i) => (
                                <SearchedValue key={i} user={user} />
                            ))
                        }
                    </div>
                }
            </div>
        </div >
    )
}



