import { useLoaderData } from "react-router-dom";
import User from "../User/User";

const Users = () => {
  const users = useLoaderData()
  return (
    <div>
      <h4>I am from  user {users.length}</h4> 
      <div className="usersStyle">
        {
          users.map(user => <User key={user.id} user={user}/>)
        }
      </div>
    </div>
  );
};

export default Users;