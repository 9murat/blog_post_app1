import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNewBlog, clearAll } from '../../../redux/slices/blogPostSlice';
import { setModalWindow } from '../../../redux/slices/modalSlice';
import { AiOutlineClose } from 'react-icons/ai'


export default function AddNewPost() {
    const [header, setHeader] = useState('');
    const [body, setBody] = useState('');

    const { posts } = useSelector(state => state.blogPostSlice);

    const { loggedUser } = useSelector(state => state.userSlice);

    const dispatch = useDispatch();

    let id = (posts.length + 1)
    const data = { header, body, userId: loggedUser.id, userName: loggedUser.name, userLastName: loggedUser.lastName };
    const newPost = { ...data, id: id };

    const handleSubmit = () => {
        if (!header && !body) {
            return;
        }
        dispatch(addNewBlog(newPost));
        setHeader('');
        setBody('');
        setTimeout(() => {
            dispatch(setModalWindow())
        }, 300);

    }
    const clear = () => {
        dispatch(clearAll());
    }

    const closeModalWindow = () => {
        dispatch(setModalWindow())
    }
    return (
        <div className='add_post_container'>
            <div className='close_icon_wrapper'>
                <AiOutlineClose onClick={() => closeModalWindow()} className='close_icon' />
            </div>
            <div className='form_wrapper'>
                <input
                    placeholder='Blog Header'
                    className='header_input add_post_input'
                    type="text"
                    value={header}
                    onChange={e => setHeader(e.target.value)}
                />
                <textarea
                    className='add_post_input textarea'
                    placeholder='Blog Body'
                    name="body_input"
                    id="body_input"
                    cols="45"
                    rows="10"
                    value={body}
                    onChange={e => setBody(e.target.value)}
                />
                <button onClick={() => handleSubmit()} className='share_blog_btn'>Share Blog</button>
                <button onClick={() => clear()} className='share_blog_btn'>Clear</button>
            </div>
        </div>
    )
}



