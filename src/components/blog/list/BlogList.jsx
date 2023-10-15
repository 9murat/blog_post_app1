import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { deleteBlog } from '../../../redux/slices/blogPostSlice';
import { CiSettings } from 'react-icons/ci';
import { showToast } from '../../utils/toast';

export default function BlogList() {
  const { posts } = useSelector((state) => state.blogPostSlice);
  const { loggedUser } = useSelector((state) => state.userSlice);

  const selectPost = posts.filter(post => parseInt(post.userId) === parseInt(loggedUser.id));

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const deletee = () => {
    dispatch(deleteBlog({ id: selectPost.id }));
    showToast('Blog deleted succefuly.')
  }


  return (
    <div className='blog_list_container'>
      {posts.map((post, i) => (
        <div key={i} className='blog_list_wrapper'>
          <div className='blog_list_blog_info' onClick={() => navigate(`/blogList/${post.id}`)}>
            <div className='blog_list_header'>{post.id}</div>
            <div className='blog_list_body' >{truncateText(post.body, 3)}</div>
          </div>
          <div className='blog_list_userInfo' onClick={() => navigate(`/userDetail/${post.userId}`)}>
            <div>{post.userName}</div>
            <div>{post.userLastName}</div>
          </div>

          {selectPost.find(select => parseInt(select.id) === parseInt(post.id)) && (
            <div className='trash_wrapper'>
              <BsTrash className='trash_icon icon' onClick={() => dispatch(deleteBlog({ id: post.id }))} />

              <CiSettings className='edit_icon icon' onClick={() => navigate(`/blogEdit/${post.id}`)} />
            </div>
          )}


        </div>

      ))}
    </div>

  )
}

function truncateText(text, maxLines) {
  const lines = text.split('\n');
  if (lines.length <= maxLines) {
    return text;
  } else {
    const limitedText = lines.slice(0, maxLines).join('\n');
    return limitedText + `\n...`;
  }
}
