import { Link } from "react-router-dom";

const categories = require("../../api/categories.json");
const Footer = () => {
  return (
    <footer
      className={"text-xs bg-purple-900 text-purple-500 mt-5 pt-7 font-sans"}
    >
      <div className={"container mx-auto"}>
        <div className={"m-auto flex flex-wrap justify-start"}>
          <div className={"p-5 w-full sm:w-1/2 lg:w-1/4"}>
            <div className={"uppercase text-purple-200 font-black"}>Shop</div>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              One Day Deals
              <span className={"text-violet-300 text-xs p-1"}>New</span>
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Best Selling
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Trending
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Summer Offers
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Minicash Offers
            </Link>
          </div>
          <div className={"p-5 w-full sm:w-1/2 lg:w-1/4"}>
            <div className={"uppercase text-purple-200 font-black"}>
              Categories
            </div>
            {categories.map((category) => {
              return (
                <Link
                  to={"category/" + category.slug}
                  key={category.id}
                  className={"my-2 block hover:text-violet-300"}
                >
                  {category.title}
                </Link>
              );
            })}
          </div>
          <div className={"p-5 w-full sm:w-1/2 lg:w-1/4"}>
            <div className={"uppercase text-purple-200 font-black"}>
              Get To Know Us
            </div>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              About Us
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Return Policy
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Delivery
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Careers
            </Link>
          </div>
          <div className={"p-5 w-full sm:w-1/2 lg:w-1/4"}>
            <div className={"uppercase text-purple-200 font-black"}>
              More Links
            </div>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Your Account
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Help
            </Link>
            <Link to="#" className={"my-2 block hover:text-violet-300"}>
              Sitemap
            </Link>
          </div>
        </div>
      </div>

      <div className={"container mx-auto pt-2 text-xs font-medium"}>
        <div
          className={
            "flex px-5 pb-5 pt-5 border-t border-purple-700 flex-col md:flex-row"
          }
        >
          <div className={"mt-2"}>© Copyright 2022. All Rights Reserved.</div>
          <div
            className={"md:flex-auto md:flex-row-reverse mt-2 flex-row flex"}
          >
            Mohamed Ahmed Abdelkader &mdash; ITI
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
