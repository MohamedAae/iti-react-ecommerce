import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/outline";

import Dropdown from "./Dropdown";
import CartModal from "../Cart/CartModal";

const Navbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const logo = props.logo ? props.logo : false;
  return (
    <nav className="bg-violet-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="w-full flex items-center justify-between">
            <NavLink
              to="/"
              className="flex flex-col flex-shrink-0 items-center"
            >
              <img
                src={logo}
                alt="WooCommerce Logo"
                className={"mr-3 h-4 sm:h-6"}
              />
              <span className="self-center text-md text-light whitespace-nowrap text-violet-100 tracking-tighter lowercase">
                eCommerce
              </span>
            </NavLink>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-2">
                <NavLink
                  to="/"
                  className=" hover:bg-purple-700 text-purple-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </NavLink>
                <Dropdown />
                <NavLink
                  to=""
                  className=" hover:bg-purple-700 text-purple-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  <span>Contact</span>
                </NavLink>
              </div>
            </div>
            <div className="ml-auto text-sm">
              <ul
                className={
                  "flex flex-row gap-x-1 md:gap-x-5 text-white mr-2 md:mr-0"
                }
              >
                <li className={"flex flex-row justify-center items-center"}>
                  <UserIcon className={"inline h-5 w-5"} />
                  <span className={"hidden md:block"}>My Account</span>
                </li>
                <li>
                  <CartModal />
                </li>
              </ul>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-violet-700 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-violet-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-violet-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <NavLink
                to="/"
                className="hover:bg-purple-700 text-white block px-3 py-2 rounded-md text-md font-bold"
              >
                Home
              </NavLink>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};

export default Navbar;
