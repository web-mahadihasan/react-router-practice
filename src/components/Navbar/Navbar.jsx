import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-nav">
      <div>
        <h3>React Routers</h3>
      </div>
      <div>
        <Link to={"/"} className="list">
          Home
        </Link>
        <NavLink to={"/product"} className='list'>Product</NavLink>
        <NavLink to={"/about"} className='list'>About</NavLink>
        <NavLink to={"/contact"} className='list'>Contact</NavLink>
        <NavLink to={"/users"} className='list'>All Users</NavLink>
        <br />
        <NavLink to={"/posts"} className='list'>See all Posts</NavLink>
      </div>
    </div>
  );
};

export default Navbar;