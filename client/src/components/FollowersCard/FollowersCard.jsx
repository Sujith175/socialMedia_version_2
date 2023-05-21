import React from "react";
import "./FollowersCard.css";
import { Followers } from "../../Data/FollowersData";
const FollowersCard = () => {
  return (
    <div className="followersCard">
      <h3>who is Following You</h3>
      {Followers.map((follower, id) => {
        return (
          <div className="follower">
            <div>
              <img className="followerImg" src={follower.img} alt="" />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.userName}</span>
              </div>
            </div>
            <button className="button fc-button">Follow</button>
          </div>
        );
      })}
    </div>
  );
};

export default FollowersCard;
