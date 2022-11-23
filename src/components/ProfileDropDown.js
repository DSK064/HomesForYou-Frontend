import React, { useState, useEffect } from "react";
import profileicon from "../assets/profileicon.svg";
import { Link, useNavigate } from "react-router-dom";
import AuthService from "../services/auth.service";
import EventBus from "../common/EventBus";
import dropdownprofilepic from '../assets/dropdownProfilepic.jpeg'

const ProfileDropDown = ({setIndex,index}) => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState(false);
  const trueToggler = () => {
    setShowMenu(true);
  };
  const falseToggler = () => {
    setShowMenu(false);
  };

  const [currentUser, setCurrentUser] = useState(undefined);

  useEffect(() => {
    const user = AuthService.getCurrentUser();

    if (user) {
      setCurrentUser(user);
    }

    EventBus.on("logout", () => {
      logOut();
      
    });

    return () => {
      EventBus.remove("logout");
    };
  }, []);

  const logOut = () => {
    AuthService.logout();
    setCurrentUser(undefined);
    setShowMenu(false);
    navigate("/");
    window.location.reload();
  };
  return (
    <div
      onMouseEnter={trueToggler}
      onMouseLeave={falseToggler}
      className="  px-2 relative  text-left"
    >
      <div>
        <button>
          <img
            src={dropdownprofilepic}
            className="p-1 w-10 h-10 rounded-full ring-1 ring-blue-400 dark:ring-gray-500"
            alt="Bordered avatar"
          />
        </button>
      </div>
      {showMenu && (
        <div className="pt-1 absolute origin-top-left right-0 z-10 bg-transparent ">
          {!currentUser ? (
            <div className="py-1 bg-white w-32 rounded-lg">
              <Link
                className="block px-4 py-2 text-center hover:text-white text-sm rounded-md hover:bg-orange-600"
                onClick={falseToggler}
                to="/login"
              >
                Login
              </Link>
              <hr/>
              <Link
                className="block w-full px-4 py-2 hover:text-white rounded-md  hover:bg-blue-500 text-center text-sm"
                to="/signup"
                onClick={falseToggler}
              >
                signup
              </Link>
            </div>
          ) : (
            <>
              <div className=" bg-white w-32 rounded-lg">
                <Link
                  
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  to="/profile"
                  className={`${index === 3 ?'block px-4 py-2 text-center hover:text-white text-sm hover:bg-blue-500 rounded-md':'block px-4 py-2 text-center hover:text-white text-sm hover:bg-blue-500 rounded-md'}`} 
                  onClick={()=>{falseToggler()
                    setIndex(3)
                  }}
                >
                  profile
                </Link>
                <hr></hr>
                <Link
                  className="block px-4 py-2 text-center hover:text-white text-sm rounded-md hover:bg-red-600"
                  role="menuitem"
                  tabindex="-1"
                  id="menu-item-0"
                  onClick={logOut}
                  to="/"
                >
                  Logout
                </Link>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProfileDropDown;
