import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { signOut } from '../../redux/slices/userSlice';

export default function InformationModalPage() {
  const { isLogged } = useSelector(state => state.userSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const signOutdd = () => {
    dispatch(signOut());

  }


  return (
    <div className='information_modal_container'>
      <div className='information_modal_child' onClick={()=>navigate('profile')}>Profile</div>
      <div className='information_modal_child'>Deneme2</div>
      <div className='information_modal_child'>Deneme2</div>
      <div className='information_modal_child'>Deneme2</div>
      <div className='information_modal_child'>Deneme2</div>
      <div className='information_modal_child sign_out_btn' onClick={() => signOutdd()}>Sign Out</div>
    </div>
  )
}
