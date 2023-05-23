import React, { useState } from "react";
import "./Auth.css";
import Logo from "../../img/logo.png";
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(true);

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
      if (data.password !== data.confirmPass) {
        setConfirmPass(false);
      }
    }
  };
  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      password: "",
      confirmPass: "",
      username: "",
    });
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
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
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
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Already have an account?" : "Don't Have an Account?"}
            </span>
          </div>
          <button className="button infoButton" type="submit">
            {isSignUp ? "Sign Up" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
