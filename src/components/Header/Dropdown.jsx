import { Menu, Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { Fragment, useEffect, useRef, useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

const categories = require("../../api/categories.json");
const Dropdown = () => {
  return (
    <div className={"text-right z-10"}>
      <Menu as="div" className={"relative inline-block text-left"}>
        <div>
          <Menu.Button
            className={
              "flex flex-row text-white font-semibold py-2 px-4 rounded outline-none text-sm"
            }
          >
            Categories
            <ChevronDownIcon
              className={
                "ml-1 -mr-1 h-5 w-5 text-violet-400"
              }
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items
            className={
              "absolute left-0 mt-1 w-60 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            }
          >
            <div>
              {categories.map((category) => {
                return (
                  <Menu.Item key={category.id}>
                    <Link to={"/category/" + category.slug}>
                      <button
                        className={
                          "bg-white hover:bg-violet-200 border-b border-b-slate-100 text-slate-900 flex flex-row w-full items-center p-3 px-5 text-xs rounded-md"
                        }
                      >
                        <img
                          src={category.image}
                          alt={category.title}
                          className={"h-9 w-9 mr-4"}
                        />
                        {category.title}
                      </button>
                    </Link>
                  </Menu.Item>
                );
              })}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Dropdown;
