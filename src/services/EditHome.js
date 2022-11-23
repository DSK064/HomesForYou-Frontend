import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditHome() {
  const navigate = useNavigate();
  const {id}=useParams();

  const [home, setHome] = useState({
    homeName: "",
    type: "",
    homePrice: "",
    location:"",
    homeImage:"",
    homeAge:"",
  });

  const { homeName, type, homePrice,location,homeAge} = home;

  const onInputChange = (e) => {
    setHome({ ...home, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadHome();
    //eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:8080/api/home/${id}`, home);
    navigate("/buy");
  };

  const loadHome= async () => {
    const result = await axios.get(`http://localhost:8080/api/home/${id}`)
    setHome(result.data)
  }

  return (

        <div className="w-screen flex items-center justify-center m-9">
          <div className="flex shadow-lg  flex-col w-1/2 bg-white rounded-xl">
          <h2 className="text-center w-fll bg-yellow-400 text-white font-bold rounded-xl text-lg rounded-bl-none rounded-br-none p-2">Edit Home</h2>

          <form onSubmit={(e) => onSubmit(e)} className=" w-full my-4 flex flex-col px-4 justify-center">
            <div className="flex felx-col my-3  px-6">
              <label htmlFor="HomeName" className="w-1/3">
                Home Name
              </label>
              <input type="text" className="border-2 border-t-0 border-l-0  border-r-0 w-full" placeholder="Enter your home name" name="homeName" value={homeName} onChange={(e) => onInputChange(e)}/>
            </div>
            <div className="flex  my-3 px-6">
              <label htmlFor="homeType" className="w-1/3">
                HomeType
              </label>
              <input type="text" className="border-2 border-t-0 border-l-0 border-r-0 w-full" placeholder="Enter homeType" name="type" value={type} onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex my-3 px-6">
              <label htmlFor="homeType" className="w-1/3">
                Home Age
              </label>
              <input type="text" className="border-2 border-t-0 border-l-0 border-r-0 w-full" placeholder="Enter homeType" name="homeAge" value={homeAge} onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex my-3 px-6">
              <label htmlFor="rentAmount" className="w-1/3">
              homePrice
              </label>
              <input type="text" className="border-2 border-t-0 border-l-0  border-r-0 w-full" placeholder="rentAmount" name="homePrice" value={homePrice} onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex my-3 px-6"> 
            <label htmlFor="Address" className="w-1/3">
               Location
              </label>
              <input type="text" className="border-2 border-t-0 border-l-0  border-r-0 w-full" placeholder="address" name="location" value={location} onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="flex justify-center items-center mt-3 gap-2">
            <button type="submit" className="bg-blue-600 w-20 h-10 text-white rounded-md">
              Submit
            </button>
            <Link className="w-24 h-10 bg-orange-500  text-white rounded-md justify-center items-center flex" to='/buy'>
              Cancel
            </Link>
            </div>
          </form>
        </div>
        </div>

  );
}