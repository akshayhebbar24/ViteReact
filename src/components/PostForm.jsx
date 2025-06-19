import React from 'react'
import { useState } from 'react'
function PostForm({addpost}) {
    const[text,setText]=useState('')
    const [image,setImage]=useState(null)
const handleSubmit=(e)=>{
 e.preventDefault();
 if(text===''&& !image){
    alert('Please enter some text')
    return
     }
 addpost({
  text,
  image,
 })
    setText('')
    setImage(null)
}
const handleImageChange=(e)=>{
    const file=e.target.files[0]
    if(file ){
        setImage(URL.createObjectURL(file))
    }else{
        alert('Please select a valid image file')
        setImage(null)
    }
};
return (
    <form onSubmit={handleImageChange}>
        <textarea placeholder='Whats on your mind?'
        value={text}
        onChange={(e)=>setText(e.target.value)}
        >
<br/>
<input type="file"
accept="image/*"
onChange={handleImageChange}
/>
<button type='submit'>Post</button>



        </textarea>
    </form>

export default PostForm