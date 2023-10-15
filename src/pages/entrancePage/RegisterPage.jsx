import { useFormik } from 'formik';
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { useNavigate } from 'react-router-dom'
import validation from './ValidationPage';
import { useDispatch, useSelector } from 'react-redux';
import { addNewUser } from '../../redux/slices/userSlice';
import { showToast } from '../../components/utils/toast';

export default function RegisterPage() {
  const { users, error } = useSelector(state => state.userSlice);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: '',
      lastName: '',
      phone: '',
      email: '',
      password: '',
    },

    onSubmit: (values, { resetForm }) => {
      const newUser = { ...values, id: users.length + 1 };
      dispatch(addNewUser(newUser));
      if (error === true) {

      } else {
        resetForm({
          name: '',
          lastName: '',
          phone: '',
          email: '',
          password: '',
        })
        showToast('Your profile registered succefully!')
        navigate('/loginPage');

      }


    },

    validationSchema: validation
  })

  return (
    <div className='page_container'>
      <form onSubmit={formik.handleSubmit} className='page_form_container'>
        <div className='page_header'>
          Join My Post App
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
        {formik.touched.name && formik.errors.name && (<div className='page_errors'> {formik.errors.name}</div>)}
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
        {formik.touched.lastName && formik.errors.lastName && (<div className='page_errors'> {formik.errors.lastName}</div>)}

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
        <div className='page_explanation'>
          By clicking continue, you accept the My Post App <span>User Agreement</span> , <span>Privacy Policy</span>, and <span>Cookie Policy</span>.
        </div>
        <button type='submit' className='page_log_in_btn' >
          Accept and Join
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
          Already a member of My Post App? <span onClick={() => navigate('/loginPage')}>  Sign In </span>
        </div>
      </form>
    </div>
  )
}



