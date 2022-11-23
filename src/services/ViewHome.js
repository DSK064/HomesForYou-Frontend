import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import AuthService from "./auth.service";
export default function ViewHome() {
  const user = AuthService.getCurrentUser();
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState();

  const [home, setHome] = useState({
    homeName: "",
    type: "",
    homePrice: "",
    location: "",
    homeImage: "",
    homeAge: "",
  });
  const { id } = useParams();

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    } else {
      navigate("/loginmsg");
    }
    loadHome();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadHome = async () => {
    const result = await axios.get(`http://localhost:8080/api/home/${id}`);
    setHome(result.data);
  };

  const addToWishList = async () => {
    const user = AuthService.getCurrentUser();
    let wishListItem = {
      userId: user.id,
      homeId: home.id,
      homeAge: home.homeAge,
      homeName: home.homeName,
      type: home.type,
      location: home.location,
      homePrice: home.homePrice,
      homeImage: home.homeImage,
    };
    await axios.post(
      "http://localhost:8080/api/wishlist/addhome",
      wishListItem
    ).catch(err=>alert("home is alredy in a cart"));
    navigate("/buy")
  };
  const deleteHome = async (id) => {
    await axios.delete(`http://localhost:8080/api/home/${id}`);
    navigate("/buy");
  };


  return (
    <div>
      {currentUser && (
        <div>
          {user.username !== "said" ? (
            <div className="flex w-full m-8">
              <div className="flex1 w-1/2 py-10 px-4 flex items-center justify-center shadow-lg rounded-lg bg-white">
                <img src={home.homeImage} alt="" className="w-full" />
              </div>
              <div className="flex-1  flex flex-col m-20 justify-center items-center">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-9">
                    <label className="">home name :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      {home.homeName}
                    </span>
                  </div>

                  <div className="flex gap-11">
                    <label className="">home type :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      {home.type}
                    </span>
                  </div>
                  <div className="flex gap-11">
                    <label className="">home Age :</label>
                    <div className="text-blue-900 font-bold">
                      <span className="uppercase">{home.homeAge} </span>years
                      old
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <label className="">home location :</label>
                    <span className="text-blue-900 font-bold ">
                      {home.location}
                    </span>
                  </div>
                  <div className="flex gap-11">
                    <label className="">home price :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      ${home.homePrice}
                    </span>
                  </div>
                </div>
                <div className="flex my-16 gap-8 items-center justify-center">
                  <div>
                    <button
                      onClick={addToWishList}
                      className="bg-orange-500 rounded-lg p-3 text-white font-bold hover:bg-orange-600 hover:shadow-md hover:shadow-orange-300"
                    >
                      ADD TO WISHLIST
                    </button>
                  </div>
                  <div className="">
                    <Link
                      className="bg-gray-500 hover:bg-gray-600 hover:shadow-md hover:shadow-gray-300 p-3 rounded-lg text-white font-bold"
                      to={"/buy"}
                    >
                      Back to Buy
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex w-full m-8">
              <div className="flex1 w-1/2 py-10 px-4 flex items-center justify-center shadow-lg rounded-lg bg-white">
                <img src={home.homeImage} alt="" className="w-full" />
              </div>
              <div className="flex-1  flex flex-col m-20 ">
                <div className="flex flex-col gap-2 justify-center pl-40">
                  <div className="flex gap-5">
                    <label className="">home name :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      {home.homeName}
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <label className="">home type :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      {home.type}
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <label className="">home Age :</label>
                    <div className="text-blue-900 font-bold">
                      <span className="uppercase">{home.homeAge} </span>years
                      old
                    </div>
                  </div>
                  <div className="flex gap-5">
                    <label className="">home location :</label>
                    <span className="text-blue-900 font-bold ">
                      {home.location}
                    </span>
                  </div>
                  <div className="flex gap-5">
                    <label className="">home price :</label>
                    <span className="text-blue-900 font-bold uppercase">
                      ${home.homePrice}
                    </span>
                  </div>
                </div>
                <div className="flex my-16 gap-8 items-center justify-center">
                  <div>
                    <Link
                      to={`/edithome/${home?.id}`}
                      className="bg-orange-500 rounded-lg p-3 text-white shadow-md shadow-orange-300 font-bold hover:bg-orange-600"
                    >
                      EDIT DETAILS
                    </Link>
                  </div>
                  <div>
                    <button
                      onClick={() => deleteHome(home.id)}
                      className="bg-red-500 rounded-lg p-3 text-white font-bold shadow-md shadow-red-300 hover:bg-red-600"
                    >
                      DELETE
                    </button>
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <Link
                    className="bg-gray-500 hover:bg-gray-600 shadow-md shadow-gray-300 p-2 w-20 text-center rounded-lg text-white font-bold"
                    to={"/buy"}
                  >
                    Back
                  </Link>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
