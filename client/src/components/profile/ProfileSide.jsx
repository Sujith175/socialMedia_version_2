import React from "react";
import "./Profile.css";
import LogoSearch from "../logoSearch/LogoSearch";
import ProfileCard from "../Profilecard/ProfileCard";
import FollowersCard from "../FollowersCard/FollowersCard";
const ProfileSide = () => {
  return (
    <div className="profileSide">
      <LogoSearch />
      <ProfileCard />
      <FollowersCard />
    </div>
  );
};

export default ProfileSide;
