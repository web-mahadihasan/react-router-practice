import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetails = () => {
  const userDetailsById = useLoaderData()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }
  return (
    <div>
      <h2>Details by person: {userDetailsById.name}</h2>
      <p>Email: {userDetailsById.email}</p>
      <p>Phone: {userDetailsById.phone}</p>
      <p>Company Website: {userDetailsById.website}</p>
      <p>Company: {userDetailsById.company.name}</p>
      <button onClick={handleGoBack}>Go back</button>
    </div>
  );
};

export default UserDetails;