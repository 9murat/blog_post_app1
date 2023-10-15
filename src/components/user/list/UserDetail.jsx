import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'

export default function UserDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { users } = useSelector(state => state.userSlice);
  const { posts } = useSelector(state => state.blogPostSlice);

  const selectedUser = users.find(post => post.id === parseInt(id));
  const getPosts = posts.filter(post => parseInt(post.userId) === parseInt(selectedUser.id));

  return (
    <div className='user_detail_container'>
      <div className='user_detail_user_info'>
        <div className='user_detail_name'>{selectedUser.name}</div>
        <div className='user_detail_lastName'>{selectedUser.lastName}</div>
      </div>
      <div className='user_detail_post_wrapper'>
        {getPosts.map((post, i) => (
          <div key={i} >
            <div className='user_detail_post_detail' onClick={() => navigate(`/blogList/${post.id}`)}>
              <div className='user_detail_post_header'>{post.header}</div>
              <div className='user_detail_post_body'>{truncateText(post.body, 3)}</div>
            </div>

          </div>
        ))}
      </div>

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


