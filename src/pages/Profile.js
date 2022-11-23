import React from "react";
import AuthService from "../services/auth.service";
import profilepageimg from "../assets/profilepageimg.svg";
const Profile = () => {
  const currentUser = AuthService.getCurrentUser();

  return (
    <div className="flex  justify-center p-8 w-screen h-full mt-10 ">
      <div className="flex bg-white w-1/2 gap-3 p-4 shadow-lg rounded-lg ">
        <div className="">
          <img src={profilepageimg} alt=""></img>
        </div>
        <div className="flex items-center justify-center p-2">
          <div className="border-2 border-orange-600 border-dashed p-4">
          <div className="flex gap-1">
            <b>Username:</b>
            <h3>{currentUser.username}</h3>
          </div>
          <div>
            <b>Email: </b>
            {currentUser.email}
          </div>
          </div>
        </div>
        {/* <p>
        <strong>Token:</strong> {currentUser.accessToken.substring(0, 20)} ...{" "}
        {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
      </p> */}
      </div>
    </div>
  );
};

export default Profile;
