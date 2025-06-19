import React from 'react'
import PostList from '../components/PostList'
import PostForm from '../components/PostForm'
import PostItem from '../components/PostItem'

function Home() {
  return (
    <div>
        <p>
            <strong>Welcome to the Home Page of Nitte!</strong>
        </p>
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

export default Home