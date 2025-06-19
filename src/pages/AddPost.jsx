import PostForm from '../components/PostForm';
function AddPost({ addPost }) {
  return (
    <div>
      <h1>Add a New Post</h1>
      <PostForm addPost={addPost} />
    </div>
  );
}
export default AddPost;