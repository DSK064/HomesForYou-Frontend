import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    const result = await axios.get("http://localhost:8080/api/users");
    setUsers(result.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:8080/api/users/${id}`);
    loadUsers();
  };
  return (

    <div className="flex flex-col mx-8 shadow-md bg-blue-500 rounded-2xl my-4">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full rounded-2xl text-center">
              <thead className=" rounded-2xl">
                <tr>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    S NO
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    USER ID
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    USER NAME
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    EMAIL
                  </th>
                  <th
                    scope="col"
                    className="text-sm font-medium text-white px-6 py-4"
                  >
                    ACTIONS
                  </th>
                </tr>
              </thead>
              <tbody>
                {users?.map((user, index) => {
                  return (
                    <tr className="bg-white border-b">
                      <td key={index} className="px-6 py-4 whitespace-nowrap font-light text-sm text-gray-900">
                        {index+1}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {user.id}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {user.username}
                      </td>
                      <td className="text-sm text-gray-900  px-6 py-4 whitespace-nowrap">
                        {user.email}
                      </td>
                      {(user.username !== "said") ?
                      (<td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <button className="outline outline-1 hover:outline-2 outline-orange-500 px-4 py-2 rounded-md  font-bold" onClick={()=>deleteUser(user.id)}>Remove User</button>
                      </td>):(
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <Link to='/profile' className=" bg-gray-500 text-white hover:outline-2  px-4 py-2 rounded-md  font-bold">ADMIN</Link>
                      </td>)}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
