import React from "react";
import "./Profile.css";
import RightSide from "../../components/RightSide/RightSide";
import PostSide from "../../components/PostSide/PostSide";
import LeftProfile from "../../components/LeftProfile/LeftProfile";
import ProfileCard from "../../components/Profilecard/ProfileCard";
const Profile = () => {
  return (
    <div className="profile">
      <LeftProfile />
      <div className="profileCenter">
        <ProfileCard />
        <PostSide />
      </div>
      <RightSide />
    </div>
  );
};

export default Profile;
