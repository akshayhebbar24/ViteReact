import React from 'react'
import PostItem from './PostItem'
function PostList({posts}) {
  return (
    <div>
        <h1>Posts</h1>
        {posts.length === 0 ? (
            <p>No posts available.</p>
        ) : (
            posts.map(({text,image},index) => (
            <PostItem key={index} text={text} image={image} />
            ))
        )}
    </div>

  )
}

export default PostList