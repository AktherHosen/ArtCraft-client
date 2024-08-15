import userImg from "../assets/user.svg";
import { Link, NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import useAuth from "../hooks/useAuth";

const Navbar = ({ handleToggleTheme }) => {
  const { user, loggedOutUser } = useAuth() || {};
  const handleLogOut = () => {
    loggedOutUser()
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-textsecondary  underline" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/allArtCraft"
          className={({ isActive }) =>
            isActive ? "text-textsecondary  underline" : "hover:underline"
          }
        >
          All Art & Craft Items
        </NavLink>
      </li>
      <li>
        <NavLink
          to={`/myArtCraft/${user?.email}`}
          className={({ isActive }) =>
            isActive ? "text-textsecondary  underline" : "hover:underline"
          }
        >
          My Art & Craft List
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/addCraft"
          className={({ isActive }) =>
            isActive ? "text-textsecondary underline" : "hover:underline"
          }
        >
          Add Craft Item
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/addSubcategory"
          className={({ isActive }) =>
            isActive ? "text-textsecondary underline" : "hover:underline"
          }
        >
          Add SubCategory
        </NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className="flex justify-between items-center my-4 py-2 h-[80px]">
        <div className="flex items-center gap-4">
          <div className="flex gap-x-8 items-center">
            <div className="flex items-center">
              <h1 className="text-3xl font-semibold">
                ArtCraft
                <span className="text-textsecondary font-bold text-4xl">.</span>
              </h1>
            </div>
            <ul className="hidden lg:flex items-center space-x-3 text-md text-gray-500">
              {navLinks}
              {user ? (
                <button
                  onClick={handleLogOut}
                  className="bg-red-600 px-3 py-2 rounded-sm  text-white"
                >
                  Logout
                </button>
              ) : (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div>
            <button>
              {user ? (
                <img
                  src={user.photoURL}
                  alt=""
                  className="h-10 w-10 border-2 rounded-full"
                />
              ) : (
                <img
                  src={userImg}
                  alt=""
                  className="h-10 w-10 border-2 rounded-full"
                />
              )}
            </button>
          </div>
          <div>
            <label className="grid cursor-pointer place-items-center">
              <input
                onChange={handleToggleTheme}
                type="checkbox"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>
          </div>

          <div className="lg:hidden cursor-pointer">
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button">
                <GiHamburgerMenu className="text-3xl" />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content menu bg-base-100 space-y-2 rounded-box mt-3 z-[1] w-52 p-2 shadow"
              >
                {navLinks}
                {user ? (
                  <button
                    onClick={handleLogOut}
                    className="bg-red-600 px-3 py-2 rounded-sm  text-white"
                  >
                    Logout
                  </button>
                ) : (
                  <>
                    <li>
                      <Link to="/login">Login</Link>
                    </li>
                    <li>
                      <Link to="/register">Register</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
