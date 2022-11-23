import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddHome() {
  let navigate = useNavigate();

  const [home, setHome] = useState({
    homeName: "",
    type: "",
    homePrice:"",
    location: "",
    homeImage: "",
    homeAge: "",
  });

  const { homeName, type, homePrice, location, homeImage, homeAge } = home;

  const onInputChange = (e) => {
    setHome({ ...home, [e.target.name]: e.target.value });
  };

  function PreviewImage(e) {
    e.preventDefault();
    let oFReader = new FileReader();
    oFReader.readAsDataURL(e.target.files[0]);

    oFReader.onload = function (oFREvent) {
      home.homeImage = oFREvent.target.result;
    };
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:8080/api/home", home);
    navigate("/buy");
  };

  return (
    <div className="w-screen flex items-center justify-center">
      <div className=" flex items-center shadow-lg justify-center flex-col w-1/2  bg-white rounded-xl">
        <h2 className="text-center text-white flex justify-center items-center rounded-tl-md rounded-tr-md  font-bold text-lg bg-blue-500 w-full h-10 py-2">
          Sell your Home
        </h2>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="bg-white w-full m-4 flex flex-col px-4 justify-center"
        >
          <div className="flex felx-col my-3  px-6">
            <label htmlFor="HomeType" className="w-1/3">
              Home name
            </label>
            <input
              type="text"
              className="border-2 border-t-0 border-l-0  border-r-0 w-full focus:border-blue-600"
              placeholder="Enter your home name"
              name="homeName"
              value={homeName}
              autoComplete = "false"
              
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex  my-3 px-6">
            <label htmlFor="homeType" className="w-1/3">
              Home type
            </label>
            <input
              type="text"
              className="border-2 border-t-0 border-l-0 border-r-0 w-full focus:border-blue-600"
              placeholder="Enter your home type"
              name="type"
              value={type}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex my-3 px-6">
            <label htmlFor="homeAge" className="w-1/3">
              Home age
            </label>
            <input
              type="text"
              className="border-2 border-t-0 border-l-0 border-r-0 w-full focus:border-blue-600"
              placeholder="Enter number of years old"
              name="homeAge"
              value={homeAge}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex my-3 px-6">
            <label htmlFor="rentAmount" className="w-1/3">
              Home price
            </label>
            <input
              type="text"
              className="border-2 border-t-0 border-l-0 border-r-0 w-full focus:border-blue-600"
              placeholder="Enter selling price of home"
              name="homePrice"
              value={homePrice}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex my-3 px-6">
            <label htmlFor="Address" className="w-1/3">
              Address
            </label>
            <input
              type="text"
              className="border-2 border-t-0 border-l-0 border-r-0 w-full focus:border-blue-600"
              placeholder="Enter location"
              name="location"
              value={location}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <div className="flex justify-center items-center mt-3">
            <div className="flex gap-2">
              <label htmlFor="uploadImage" className="cursor-pointer py-3 px-4 outline outline-1 hover:outline-2 hover:shadow-slate-300 rounded-md">
                Upload home Image
              </label>
              <div className="flex p-2  border rounded-md text-white hidden">
                <input
                  type="file"
                  onChange={(e) => PreviewImage(e)}
                  name="homeImage"
                  value={homeImage}
                  id="uploadImage"
                  accept="image/*"
                  className="cursor-pointer "
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <div className="flex gap-5">
              <button
                type="submit"
                className="bg-green-600 px-2 w-20 h-10 hover:shadow-md hover:shadow-green-300 text-white rounded-md"
              >
                Post
              </button>
              <div className="w-24 h-10 bg-orange-500 hover:shadow-md hover:shadow-orange-300  text-white rounded-md justify-center items-center flex">
                <Link to="/">Cancel</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
