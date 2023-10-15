import { useFormik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { updateBlog } from '../../../redux/slices/blogPostSlice';
import { showToast } from '../../utils/toast';

export default function BlogPostUpdate() {

    const { id } = useParams();
    const { posts } = useSelector(state => state.blogPostSlice);
    const selectedPost = posts.find(post => parseInt(post.id) === parseInt(id));

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            header: selectedPost.header,
            body: selectedPost.body,
        },
        onSubmit: (values) => {
            const newData = { ...values, id: id };
            dispatch(updateBlog(newData));
            showToast('The data has been updated successfully .')
            navigate('/');
        }
    })
    return (
        <div className='update_post_container'>
            <form onSubmit={formik.handleSubmit} className='form_wrapper'>
                <input
                    placeholder='Blog Header'
                    className='header_input update_post_input'
                    type="text"
                    name='header'
                    id='header'
                    value={formik.values.header}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoFocus

                />
                <textarea
                    className='update_post_input textarea'
                    placeholder='Blog Body'
                    name="body"
                    id="body"
                    cols="45"
                    rows="10"
                    value={formik.values.body}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <button type='submit' className='share_blog_btn'>Update Blog</button>
            </form>
        </div>
    )
}




