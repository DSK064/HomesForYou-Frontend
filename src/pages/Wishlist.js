import React from "react";
import AuthService from "../services/auth.service";
import { useEffect, useState } from "react";
import axios from "axios";
import wishlistempty from '../assets/wishlistempty.jpg'
import { AiFillCloseCircle } from "react-icons/ai";
import { Link } from "react-router-dom";

const Wishlist = () => {
  const [item, setItem] = useState([]);
  const user = AuthService.getCurrentUser();
  useEffect(() => {
    loadWishlist();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const loadWishlist = async () => {
    const wishListItem = await axios.get(
      `http://localhost:8080/api/wishlist/${user.id}`
    );
    setItem(wishListItem.data);
    console.log(wishListItem.data);
  };

  const deleteItem = async (id) => {
    await axios.delete(`http://localhost:8080/api/wishlist/${id}`);
    loadWishlist();
  };
  const buyHome = async (id) => {
    window.alert("Home bought successfully..");
    await axios.delete(`http://localhost:8080/api/wishlist/${id}`);
    loadWishlist();
  };
  return (
    <div className=" flex justify-center">
      {(item.length !==0) ? (
        <div className=" w-[80%] flex flex-col">
          {item?.map((item) => {
            return (
              <div className="w-full bg-white shadow-lg  border border-blue-500 mx-auto my-4 flex rounded-lg  ">
                <div className="flex-1 flex justify-start  items-center ">
                  <img
                    src={item?.homeImage}
                    alt=""
                    className="w-[50%] h-full rounded-lg"
                  ></img>
                </div>
                <div className="flex-1   flex flex-col gap-5  my-4">
                  <div className="flex px-8 justify-between">
                    <h2>
                      Name: <span className="font-bold">{item?.homeName}</span>
                    </h2>
                    <h4>
                      Price:{" "}
                      <span className="font-bold">${item?.homePrice}</span>
                    </h4>
                  </div>
                  <div className="flex px-8 justify-between">
                    <h4>
                      Home age:{" "}
                      <span className="font-bold">
                        {item?.homeAge} years old
                      </span>
                    </h4>
                    <h4>
                      Type: <span className="font-bold">{item?.type}</span>
                    </h4>
                  </div>
                  <div className="text-center text-white ">
                    <h4 className="bg-gray-400 rounded-md p-1 mx-20">
                      Location: {item?.location}
                    </h4>
                  </div>
                </div>
                <div className="flex-1 relative flex items-center justify-center">
                  <div className="flex absolute right-1 top-1 justify-end">
                    <span
                      className="text-4xl text-red-600 hover:text-red-700"
                      onClick={() => deleteItem(item.wishListId)}
                    >
                      <AiFillCloseCircle />
                    </span>
                    {/* <img src={removeicon} alt='' className="w-10 h-10 " ></img> */}
                  </div>
                  <button
                    className="outline outline-2 hover:bg-orange-500 hover:text-white text-lg font-bold outline-orange-500 px-8 py-2 rounded-md mx-28"
                    onClick={() => buyHome(item.wishListId)}
                  >
                    BUY
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className=" mt-16 flex flex-col items-center justify-center">
          <img src={wishlistempty} alt='' className="h-[300px] shadow-lg rounded-lg"></img>
          <p className="mt-4 text-center">Your Wishlist is Empty..</p>
          <Link className="mt-5 px-4 py-1 outline font-semibold hover:bg-orange-500 hover:text-white outline-orange-500 rounded-sm" to='/buy' >ADD</Link>
        </div>
      )}
    </div>
  );
};
export default Wishlist;
