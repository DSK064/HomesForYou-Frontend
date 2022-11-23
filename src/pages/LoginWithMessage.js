import { Link } from "react-router-dom";
import "./sell.css";
import loginimg from "../assets/signupimg.svg";
import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../services/auth.service";

const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = () => {
  let navigate = useNavigate();

  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    setMessage("");
    setLoading(true);

    form.current.validateAll();

    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };
  return (
    <div>
        <div>
            <h2 className="w-full flex justify-center bg-gray-100 pt-3 text-red-600">*please login first...</h2>
        </div>
    <div className="container flex justify-around  w-full h-full bg-gray-100">
      <div className=" lg:flex items-center justify-around">
        <img src={loginimg} alt="" className="w-[50%]" />
      </div>
      <div className="flex items-center  flex-col w-1/3  m-auto mr-36  border-gray-400 border shadow-lg bg-white mt-20 rounded-2xl">
        <h2 className="font-bold text-2xl bg-blue-500 w-full text-white flex justify-center rounded-2xl h-10 px-4">Login</h2>
        <Form className=" w-full" onSubmit={handleLogin} ref={form}>
          <div className="px-8 py-4 flex flex-col gap-1">
            <label htmlFor="email" className="text-base font-bold">
              username
            </label>
            <Input
              type="text"
              className="p-3 px-0 border w-full border-blue-600 border-t-0 border-l-0 border-r-0"
              placeholder="Enter Your username"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
            />
          </div>
          <div className="px-8 py-4 flex flex-col gap-1">
            <label htmlFor="password" className="text-base font-bold">
              Password
            </label>
            <Input
              type="password"
              className="p-3 px-0 border w-full border-blue-600 border-t-0 border-l-0 border-r-0"
              placeholder="Enter Your Password"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
          </div>
          <div className="px-4 py-4 flex flex-col gap-2 items-center">
            <button
              className="bg-orange-400 hover:bg-orange-600 text-white font-bold w-32 py-3 px-4  rounded-md text-lg"
              disabled={loading}
            >
              {loading && <span></span>}
              <span>Login</span>
            </button>
          </div>
          {message && (
            <div className="form-group">
              <div className="text-red-500">
                *{message}
              </div>
            </div>
          )}
          <CheckButton style={{ display: "none" }} ref={checkBtn} />
          <div className="px-4 py-4 flex gap-2 items-center justify-center">
            <span className="text-black">Don't have an account yet?</span>
            <Link
              to="/signup"
              className="text-blue-700 hover:scale-105 duration-300"
            >
              Signup Now
            </Link>
          </div>
        </Form>
      </div>
    </div>
    </div>
  );
};
export default Login;
