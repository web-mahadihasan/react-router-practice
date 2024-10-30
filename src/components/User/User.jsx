import { Link } from "react-router-dom";

const User = ({user}) => {
  const {id, name, email, phone, website} = user
  const userStyle = {
    border: '2px solid aquamarine',
    padding: '10px',
    borderRadius: '10px'
  }
  return (
    <div style={userStyle}>
      <h4>{name}</h4>
      <p>{email}</p>
      <p>{phone}</p>
      <p>{website}</p>
      <Link to={`/users/${id}`}> <button>See Details</button></Link>
    </div>
  );
};

export default User;