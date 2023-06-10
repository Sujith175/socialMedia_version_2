import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from "../../store/Auth/AuthAction";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer.loading);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    confirmPass: "",
    username: "",
  });
  const [confirmPass, setConfirmPass] = useState(true);

  const handleChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isSignUp) {
      data.password === data.confirmPass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setIsSignUp(!isSignUp);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmPass: "",
      username: "",
    });
  };
  const handleFunction = () => {
    resetForm();
  };
  return (
    <div className="auth">
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="webName">
          <h1>Pink Media</h1>
          <h6>Explore the Pink</h6>
        </div>
      </div>
      <div className="a-right">
        <form action="" className="infoForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Login"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}

          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>
          <div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="infoInput"
                name="password"
                onChange={handleChange}
                value={data.password}
              />
            </div>
            {isSignUp && (
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="infoInput"
                  name="confirmPass"
                  onChange={handleChange}
                  value={data.confirmPass}
                />
              </div>
            )}
          </div>
          <span
            style={{
              display: confirmPass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            Password Doesn't Match!
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={handleFunction}
            >
              {isSignUp ? "Already have an account?" : "Don't Have an Account?"}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "Loading..." : isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
