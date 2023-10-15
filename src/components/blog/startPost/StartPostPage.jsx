import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setModalWindow } from '../../../redux/slices/modalSlice';
import AddNewPost from '../addPost/AddNewPost';
import BlogList from '../list/BlogList';

export default function StartPostPage() {
    const { modalWindow } = useSelector(state => state.modalSlice);

    const dispatch = useDispatch();

    const setModal = () => {
        dispatch(setModalWindow());
    }

    return (
        <div className='start_post_page_container'>
            <div className='start_post_btn' onClick={() => setModal()}>Start Post</div>
            {modalWindow ? <AddNewPost /> 
            :                <BlogList />
            }

        </div>
    )
}
