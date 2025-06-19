import React, { useState } from 'react';

function PostForm({ addPost }) {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text === '' && !image) {
      alert('Please enter some text or select an image');
      return;
    }
    addPost({
      text,
      image,
    });
    setText('');
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    } else {
      alert('Please select a valid image file');
      setImage(null);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        placeholder="What's on your mind?"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
      />
      <button type="submit">Post</button>
    </form>
  );
}

export default PostForm;
