import React from 'react'

function PostItem(text, image) {
  return (
    <div>
<p>
        <strong>{text}</strong>
</p>
        {image && <img src={image} alt="Post" style={{ maxWidth: '100%', height: 'auto' }} />}
    </div>
  )
}

export default PostItem