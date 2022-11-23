import { Link, useNavigate } from "react-router-dom";
import signupimg from "../assets/loginimg.svg";
import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
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

const validEmail = (value) => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = (value) => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vpassword = (value) => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successful, setSuccessful] = useState(false);
  const [message, setMessage] = useState("");
  const form = useRef();
  const checkBtn = useRef();
  const navigate = useNavigate();
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };

  const onChangeEmail = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleRegister = (e) => {
    e.preventDefault();

    setMessage("");
    setSuccessful(false);

    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.register(username, email, password).then(
        (response) => {
          setMessage(response.data.message);
          setSuccessful(true);
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          setMessage(resMessage);
          setSuccessful(false);
        }
        
      );
      navigate("/")
    }
  };
  return (
    <div className="flex w-full   h-screen relative bg-slate-100">
      <div className="absolute w-[120px] h-[120px] bg-indigo-200 rounded-full top-0 left-0 mt-5 ml-10"></div>
      <div className=" lg:flex items-center justify-center">
        <img src={signupimg} alt="" className="w-[50%] ml-10" />
      </div>
      <div className=" mr-28 border flex items-center m-auto justify-center border-gray-400  flex-col w-1/3  shadow-lg rounded-2xl bg-white">
        <h2 className=" font-bold text-2xl  bg-blue-500 w-full h-10 text-center rounded-tl-2xl rounded-tr-2xl text-white px-4 hover:shadow-md hover:shadow-blue-300">Register Here</h2>
        <Form className=" w-full " onSubmit={handleRegister} ref={form}>
          {!successful && (
            <div>
              <div className="px-8 py-4 flex flex-col gap-1 ">
                <label htmlFor="name" className="text-base font-bold">
                  username
                </label>
                <Input
                  type="text"
                  className="p-4 rounded-md border-sky-600 border w-full"
                  placeholder="Enter Your username"
                  name="username"
                  value={username}
                  onChange={onChangeUsername}
                  validations={[required, vusername]}
                />
              </div>
              <div className="px-8 py-4 flex flex-col gap-1">
                <label htmlFor="email" className="text-base font-bold ">
                  Email
                </label>
                <Input
                  type="email"
                  name="email"
                  className="p-4 rounded-md border-sky-600 border w-full"
                  placeholder="Enter Your email"
                  value={email}
                  onChange={onChangeEmail}
                  validations={[required, validEmail]}
                />
              </div>
              <div className="px-8 py-4 flex flex-col gap-1">
                <label htmlFor="password" className="text-base font-bold">
                  Password
                </label>
                <Input
                  type="password"
                  name="password"
                  className="p-4 rounded-md border-sky-600 border w-full"
                  placeholder="Enter Your password"
                  value={password}
                  onChange={onChangePassword}
                  validations={[required, vpassword]}
                />
              </div>
              <div className="px-8 py-4 flex flex-col gap-2 items-center">
                <button className="bg-blue-500 text-white font-bold w-40 py-3 px-4  rounded-md text-lg hover:bg-blue-700">
                  Register
                </button>
              </div>
              {message && (
                <div
                  className={
                    successful
                      ? "p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
                      : "p-4 mb-4 text-sm text-red-700 bg-red-100 rounded-lg dark:bg-red-200 dark:text-red-800"
                  }
                  role="alert"
                >
                  {message}
                </div>
              )}
              <CheckButton style={{ display: "none" }} ref={checkBtn} />
              <div className="px-8 py-2 flex gap-2 items-center justify-center">
                <span className="">Already have an account?</span>
                <Link
                  to="/login"
                  className="text-blue-500 hover:scale-105 duration-300"
                >
                  Signin Now
                </Link>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
};
//

export default Register;
