
import React, { useState } from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { forgotPassword, login } from '../../redux/slices/userSlice';


export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if (!email || !password) {
            return;
        }
        dispatch(forgotPassword({ email, password }));

        // setTimeout(() => {
        //     if (isLogged) {

        //     } else {
        //         alert('noooo')
        //     }
        // }, 1000);
        
    }

    return (
        <div className='page_container'>
            <form className='page_form_container' onSubmit={() => handleSubmit()}>
                <div className='page_header'>
                    Forgot Password Page
                </div>
                <div className='input-wrapper post_wrapper'>
                    <label htmlFor="" className='label-value posta'>
                        E-posta or phone
                    </label>
                    <input
                        className='page_input input_posta'
                        type="text"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                </div>

                <div className='input-wrapper password_wrapper'>
                    <label htmlFor="" className='label-value password'>
                        New Password
                    </label>
                    <input
                        className='page_input input_password'
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div className='page_explanation'>
                    By clicking continue, you accept the My Post App <span>User Agreement</span> , <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
                </div>
                <button type='submit' className='page_log_in_btn'>
                    Save and Sign In
                </button>

                <div className='page_choose'>
                    <div>
                        or
                    </div>
                </div>

                <div className='page_google_wrapper'>
                    <FcGoogle /> Continue with Google
                </div>
                <div className='page_new_here'>
                    Are you new to my post app? <span onClick={() => navigate('/registerPage')}>  Join now </span>
                </div>
            </form>
        </div>
    )
}




