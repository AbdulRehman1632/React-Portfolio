import React from "react";
import "./SocialLink.css";
import { NavLink } from "react-router-dom";

const SocialLink = ({ items }) => {
  return (
    <div className="socials">
      {items.map((value, index) => {
        return (
          <div className="icon" key={index}>
            <NavLink to={value.path}>
              <i className={value.logo}></i>
            </NavLink>
          </div>
        );
      })}
    </div>
  );
};

export default SocialLink;
