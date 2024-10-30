import { Link } from "react-router-dom";

const Post = ({post}) => {
  const { id, userId, title, body } = post;
  const postStyle ={
    border: '2px solid steelblue',
    padding: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={postStyle}>
      <p>User ID: {userId}</p>
      <h4>Post title: {title}</h4>
      <p>Post Desc: {body}</p>
      <Link to={`/posts/${id}`}><button>See post details</button></Link>
    </div>
  );
};

export default Post;