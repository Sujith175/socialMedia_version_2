import React from "react";
import "./profilecard.css";
import Cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
const ProfileCard = () => {
  const ProfilePage = true;
  return (
    <div className="profileCard">
      <div className="profileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="profileName">
        <span>Sujith</span>
        <span>React Developer</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>7000</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>1</span>
            <span>Followers</span>
          </div>
          {ProfilePage && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>3</span>
                <spa>Posts</spa>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {ProfilePage ? "" : <span>My Profile</span>}
    </div>
  );
};

export default ProfileCard;