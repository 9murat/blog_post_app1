import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../redux/slices/userSlice';
import validation from '../entrancePage/ValidationPage';
import { showToast } from '../../components/utils/toast';


export default function UpdateProfile() {
    const {  loggedUser } = useSelector(state => state.userSlice);

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            name: loggedUser.name,
            lastName: loggedUser.lastName,
            phone: loggedUser.phone,
            email: loggedUser.email,
            password: loggedUser.password,
        },

        onSubmit: (values) => {
            const newUser = { ...values, id: loggedUser.id };
            dispatch(updateUser(newUser));
            showToast('Data updated successfully')
            navigate('/');
        },

        validationSchema: validation
    })

    return (
        <div className='page_container'>
            <form onSubmit={formik.handleSubmit} className='page_form_container'>
                <div className='page_header'>
                    Update Profile
                </div>
                <div className='input-wrapper name_wrapper'>
                    <input
                        placeholder='Name'
                        className='page_input input_name'
                        type="text"
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        autoFocus
                    />
                </div>
                <div className='input-wrapper lastName_wrapper'>
                    <input
                        placeholder='Last Name'
                        className='page_input input_lastName'
                        type="text"
                        id='lastName'
                        name='lastName'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.lastName}

                    />
                </div>

                <div className='input-wrapper lastName_wrapper'>
                    <input
                        placeholder='Phone Number'
                        className='page_input input_lastName'
                        type="text"
                        id='phone'
                        name='phone'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.phone}

                    />
                </div>
                {formik.touched.phone && formik.errors.phone && (<div className='page_errors'> {formik.errors.phone}</div>)}

                <div className='input-wrapper post_wrapper'>
                    <input
                        placeholder='E-posta'
                        className='page_input input_posta'
                        type="text"
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        autoFocus={false}
                    />
                </div>
                {formik.touched.email && formik.errors.email && (<div className='page_errors'> {formik.errors.email}</div>)}

                <div className='input-wrapper password_wrapper'>
                    <input
                        placeholder='Password (6+ character)'
                        className='page_input input_password'
                        type="password"
                        id='password'
                        name='password'
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}

                    />
                </div>
                {formik.touched.password && formik.errors.password && (<div className='page_errors'> {formik.errors.password}</div>)}

                <button type='submit' className='page_log_in_btn' >
                    Update
                </button>

            </form>
        </div>
    )
}



