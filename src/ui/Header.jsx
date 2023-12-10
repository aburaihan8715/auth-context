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
              className="h-5 w-5"
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
            className="menu-compact dropdown-content menu rounded-box mt-3 w-52 bg-base-100 p-2 shadow"
          >
            {menus}
          </ul>
        </div>
        <a className="btn-ghost btn text-xl normal-case">ContextAuthPractice</a>
      </div>

      {/* desktop nav */}
      <div className="navbar-center hidden lg:flex ">
        <ul className="menu menu-horizontal space-x-2 px-1">{menus}</ul>
      </div>

      <div className="navbar-end space-x-2  ">
        {!user && (
          <div className="">
            <Link to="/login" className="btn-secondary btn">
              Login
            </Link>
          </div>
        )}

        {user && (
          <div className=" relative flex items-center gap-3 ">
            <div
              onClick={() => setIsProfileOpen(!isProfileOpen)}
              className="flex cursor-pointer items-center"
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
    <div className="absolute right-10 top-16 w-60 rounded-md border bg-gradient-to-l from-purple-300 to-pink-300 px-6 py-4 text-center text-gray-50 shadow-md transition duration-100 hover:bg-gradient-to-r ">
      <div className="space-y-2">
        <div className="flex justify-center">
          <img
            className="rounded-full p-1 ring ring-gray-50"
            src={user?.photoURL}
            width={100}
            height={100}
            alt="profile"
          />
        </div>
        <h4 className="border-b text-2xl font-semibold capitalize">
          Name: {user?.displayName}
        </h4>
        <div className="border-b font-semibold">
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
