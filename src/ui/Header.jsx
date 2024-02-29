import { Link, NavLink, useNavigate } from "react-router-dom";
import { useUserAuth } from "../hooks/useUserAuth";
import { useState } from "react";

const Header = () => {
  const { logOut, user } = useUserAuth();
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const navigate = useNavigate();

  const menus = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>

      <li>
        <NavLink to="/blogs">Blogs</NavLink>
      </li>

      <li>
        <NavLink to="/protect">Protect</NavLink>
      </li>

      <li>
        <NavLink to="/admin">Admin</NavLink>
      </li>

      <li>
        <NavLink to="/user">User</NavLink>
      </li>

      <li>
        <NavLink to="/instructor">Instructor</NavLink>
      </li>

      <li>
        <NavLink to="/multiRole">Admin/Instructor</NavLink>
      </li>
    </>
  );

  const logOutHandler = async () => {
    await logOut();
    navigate("/login");
  };

  return (
    <div className="navbar bg-neutral text-neutral-content">
      <div className="navbar-start ">
        <div className="dropdown">
          <label tabIndex={0} className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="p-2 mt-3 shadow menu-compact dropdown-content menu rounded-box w-52 bg-base-100"
          >
            {menus}
          </ul>
        </div>
        <Link to={`/`}>
          <span className="text-2xl font-bold uppercase">AuthContext</span>
        </Link>
      </div>

      {/* desktop nav */}
      <div className="hidden navbar-center lg:flex ">
        <ul className="px-1 space-x-2 menu menu-horizontal">{menus}</ul>
      </div>

      <div className="space-x-2 navbar-end ">
        {!user && (
          <div className="">
            <Link to="/login" className="btn-secondary btn">
              Login
            </Link>
          </div>
        )}

        {user && (
          <div className="relative flex items-center gap-3 ">
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex items-center cursor-pointer"
            >
              <div className="avatar">
                <div className="w-10 rounded-full ring ring-secondary ring-offset-2 ring-offset-base-100">
                  <img src={user?.photoURL} />
                </div>
              </div>
            </div>

            {isProfileOpen && <ProfileCard />}

            <button onClick={logOutHandler} className="btn-secondary btn">
              LogOut
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

// profile card component
const ProfileCard = () => {
  const { user } = useUserAuth();
  return (
    <div className="absolute px-6 py-4 text-center transition duration-100 border rounded-md shadow-md right-10 top-16 w-60 bg-gradient-to-l from-purple-300 to-pink-300 text-gray-50 hover:bg-gradient-to-r ">
      <div className="space-y-2">
        <div className="flex justify-center">
          <img
            className="p-1 rounded-full ring ring-gray-50"
            src={user?.photoURL}
            width={100}
            height={100}
            alt="profile"
          />
        </div>
        <h4 className="text-2xl font-semibold capitalize border-b">
          Name: {user?.displayName}
        </h4>
        <div className="font-semibold border-b">
          Email: {user?.email ? user.email : "unknown"}
        </div>
        <div>
          <Link to="/update-profile">
            <button className="btn-secondary btn-block btn-xs btn">
              update
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};
