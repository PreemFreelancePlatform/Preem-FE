import React, { useState, useEffect } from "react";
import "../styles/Shared-Styles/Landing.css";
import { ReactComponent as Logo } from "../assets/adwords.svg";
import { Link } from "react-router-dom";
import { axiosWithAuth } from "../Utils/axiosWIthAuth";

export const Logout = () => {
  const logout = () => {
    axiosWithAuth()
      .get(`http://localhost:2019/logout`)
      .then((res) => {
        // either refresh page or redirext back to the login
      })
      .catch((err) => console.log(err.res))
      .then(() => {
        window.location.replace(`/login`);
      });
  };

  return (
    <button
      onClick={() => {
        logout();
      }}
    >
      logout
    </button>
  );
};
