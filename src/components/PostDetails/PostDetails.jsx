import { useLoaderData, useNavigate } from "react-router-dom";

const PostDetails = () => {
  const postDetailsById = useLoaderData()
  const navigate = useNavigate()
  const { userId, body, title } = postDetailsById;

  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <p>User ID: {userId}</p>
      <h2>Post Title: {title}</h2>
      <p>Post Description: {body}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default PostDetails;