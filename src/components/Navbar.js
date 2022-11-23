import { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/auth.service";
import projectLogo from "../assets/projectLogo.png";
import ProfileDropDown from "./ProfileDropDown";

const Navbar = ({ setQuery }) => {
  const user = AuthService.getCurrentUser();
  const [searchValue, setSearchValue] = useState("");
  const [index, setIndex] = useState(0);
  return (
    <nav className="px-4 text-black h-16 flex  w-screen items-center justify-between sticky top-0 z-50 bg-white border-slate-100 border-2 border-t-0">
      <div>
        <button className="hover:scale-105  duration-300 text-3xl font-bold font-mono pr-16 ">
          <Link
            to="/"
            className={`${index === 2 ? "" : null}`}
            onClick={() => {
              setIndex(2);
            }}
          >
            <img className="w-36" src={projectLogo} alt=""></img>
          </Link>
        </button>
      </div>

      <div className="xl:w-72  flex-1 flex justify-end ">
        <div className="input-group relative flex flex-row items-stretch w-[70%] justify-center">
          <input
            type="search"
            className=" relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            value={searchValue}
            aria-describedby="button-addon2"
            onChange={(e) =>setSearchValue(e.target.value)}
          />
          <button
            className="btn  px-6 py-2.5 bg-blue-700 text-white font-medium text-xs leading-tight uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
            onClick={() => {setQuery(searchValue)
              setSearchValue("")}}
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="search"
              className="w-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div className="flex ml-16 mr-5  justify-end  ">
        <div className="  rounded-lg  text-xl text-gray-800 hover:bg-orange-500 hover:text-white w-16 text-center py-1  ">
          <Link
            to="/buy"
            className={`${
              index === 0
                ? "text-orange-500 hover:text-white "
                : "hover:text-white "
            }`}
            onClick={() => {
              setIndex(0);
            }}
          >
            Buy
          </Link>
        </div>
        <div className=" rounded-xl text-xl text-gray-800  hover:bg-orange-500 w-16 text-center py-1 hover:text-white">
          <Link
            to="/sell"
            className={`${
              index === 1
                ? "text-orange-500 hover:text-white  "
                : "hover:text-white"
            }`}
            onClick={() => {
              setIndex(1);
            }}
          >
            Sell
          </Link>
        </div>
        {user && (
          <div>
            {(user.username !== "said")?  (
              <div className=" rounded-xl text-xl text-gray-800  hover:bg-orange-500 w-20 text-center py-1 hover:text-white">
                <Link
                  to={`/wishlist/${user?.id}`}
                  className={`${
                    index === 3
                      ? "text-orange-500  hover:text-white"
                      : "hover:text-white"
                  }`}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  Wishlist
                </Link>
              </div>
            ):(
              <div>
                <div className=" rounded-xl text-xl text-gray-800  hover:bg-orange-500 w-20 text-center py-1 hover:text-white">
                <Link
                  to="/userdetails"
                  className={`${
                    index === 3
                      ? "text-orange-500  hover:text-white"
                      : "hover:text-white"
                  }`}
                  onClick={() => {
                    setIndex(3);
                  }}
                >
                  Users
                </Link>
              </div>
              </div>
            )}
          </div>
        )}
      </div>

      <div>
        <ProfileDropDown setIndex={setIndex} index={index} />
      </div>
    </nav>
  );
};

export default Navbar;

// bg-[#03b0fd]
