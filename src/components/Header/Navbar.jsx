import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { SearchIcon } from "@heroicons/react/solid";
import { ShoppingBagIcon, UserIcon } from "@heroicons/react/outline";

import Dropdown from "./Dropdown";

const Navbar = (props) => {
  const logo = props.logo ? props.logo : false;
  return (
    <nav className={"w-full h-20 bg-white text-md shadow-md"}>
      <div
        className={
          "container mx-auto h-full flex flex-row justify-between items-center"
        }
      >
        <NavLink to="/">
          {logo ? (
            <img src={logo} alt="WooCommerce Logo" className={"h-10"} />
          ) : (
            <h1 className={"font-bold text-lg text-gray-500 font-serif"}>
              Website Logo
            </h1>
          )}
        </NavLink>
        <Dropdown />
        <button
          className={
            "bg-white hover:bg-gray-100 text-red-700 font-semibold py-2 px-4 rounded"
          }
        >
          Everyday Deals
        </button>
        <form className={"w-full max-w-lg relative"}>
          <input
            className={
              "appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            }
            id="grid-password"
            type="text"
            placeholder="Search for products or brands"
          />
          <button
            type="submit"
            className={
              "absolute top-1/2 right-4 -translate-x-1/2 -translate-y-1/2"
            }
          >
            <SearchIcon className={"inline h-5 w-5"} />
          </button>
        </form>
        <ul className={"flex flex-row gap-x-5 text-neutral-800"}>
          <li>
            <Link to="/account">
              <UserIcon className={"inline h-5 w-5"} /> My Account
            </Link>
          </li>
          <li className={"relative"}>
            <span
              className={
                "flex flex-row items-center justify-center absolute top-0 left-0 h-4 w-4 bg-red-700 text-white rounded-full text-xs"
              }
            >
              {props.count}
            </span>
            <Link to="/cart">
              <ShoppingBagIcon className={"inline h-5 w-5"} /> Cart
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.cart.count,
  };
};

export default connect(mapStateToProps)(Navbar);
