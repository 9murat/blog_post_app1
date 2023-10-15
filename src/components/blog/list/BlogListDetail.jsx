import React from 'react'
import {  useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'

export default function BlogListDetail() {
    const { id } = useParams();
    const { posts } = useSelector(state => state.blogPostSlice);

    const selectedPost = posts.find(post => post.id === parseInt(id));

    return (
        <div className='blog_list_detail_wrapper'>
            <div className='blog_list_detail_header'>{selectedPost.header}</div>
            <div className='blog_list_detail_body' >{selectedPost.body}</div>
            <div className='blog_list_detail_userInfo'>
                <div>{selectedPost.userName}</div>
                <div>{selectedPost.userLastName}</div>
            </div>
        </div>
    )
}



