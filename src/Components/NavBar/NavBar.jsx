import { NavLink } from "react-router-dom";
const NavBar = () => {
  const links = (
    <>
      <li>
        {" "}
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? `border-2 border-[#23BE0A] text-[#23BE0A] px-2 rounded-md`
              : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          className={({ isActive, isPending }) =>
            isPending
              ? ""
              : isActive
              ? `border-2 border-[#23BE0A] text-[#23BE0A] px-2 rounded-md`
              : ""
          }
          to="/listedBooks"
        >
          Listed Books
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-white">
      <div className="navbar lg:w-[70vw] mx-auto px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg> 
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl px-0">Barsha Book Store</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-3">{links}</ul>
        </div>
        <div className="navbar-end gap-6">
          <a className="btn rounded-md bg-[#23BE0A] text-white">Sign In</a>
          <a className="btn rounded-md bg-[#59C6D2] text-white">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
