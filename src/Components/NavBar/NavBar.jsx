import { AiOutlineShoppingCart } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const navigation = (
    <>
      <li className="text-red">
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
      <li>
        <NavLink to="/dashboard">Dashboards</NavLink>
      </li>
    </>
  );

  return (
    <>
      <nav className="max-w-[1280px] mx-auto px-5">
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
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
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {navigation}
              </ul>
            </div>
            <a className="btn btn-ghost md:text-xl">Gadget Heaven</a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navigation}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-white rounded-full text-black font-bold hover:text-white mr-2 border-gray-400">
              <AiOutlineShoppingCart />
            </a>
            <a className="btn bg-white rounded-full text-black font-bold hover:text-white border-gray-400">
              <FaRegHeart />
            </a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
