import React from "react";
import Logo from "../../img/logo.png";
import Search from "../../img/search.png";
import "./logoSearch.css";
const LogoSearch = () => {
  return (
    <div className="logoSearch">
      <img src={Logo} alt="" height="50px" width="80px" />
      <div className="search">
        <input type="text" placeholder="#explore" />
        <div className="s-icon">
          <img src={Search} alt="" height="30px" width="30px" />
        </div>
      </div>
    </div>
  );
};

export default LogoSearch;
