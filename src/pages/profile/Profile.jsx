import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { BsTrash } from 'react-icons/bs';
import { CiSettings } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import { deleteProfile } from '../../redux/slices/userSlice';
import { showToast } from '../../components/utils/toast';


export default function Profile() {
    const { loggedUser } = useSelector(state => state.userSlice);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const deleteUser = () => {
        dispatch(deleteProfile(loggedUser.id));
        showToast('Profile deleted successfully');
        navigate('/');
    }

    return (
        <div className='profile_container'>
            <div className='profile_wrapper'>

                <div>Name : <span>{loggedUser.name}</span>  </div>
                <div>Last Name : <span>{loggedUser.lastName}</span>  </div>
                <div>E-Posta : <span>{loggedUser.email}</span> </div>
                <div>Phone Number : <span>{loggedUser.phone}</span>  </div>
            </div>
            <div className='edit_profile_wrapper'>
                <div className='update_profile_btn ' onClick={() => navigate('/update')}>Update Profile <CiSettings className='edit_delete_icon ' /></div>
                <div className=' delete_profile_btn' onClick={() => deleteUser()}>Delete Profile <BsTrash className='edit_delete_icon ' /></div>
            </div>

        </div>
    )
}
