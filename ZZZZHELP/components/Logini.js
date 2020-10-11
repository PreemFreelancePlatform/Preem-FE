import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory } from "react-router-dom";

export const LoginI = () => {
  const [Lcreds, setLCreds] = useState({
    username: "",
    password: "",
  });

  const handleChanges = (e) => {
    setLCreds({
      ...Lcreds,
      [e.target.name]: e.target.value,
    });
  };

  let history = useHistory();

  const login = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/investor/login", Lcreds)
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", JSON.stringify(res.data.token));
        history.push('/projects')
      });

    console.log("invest login", Lcreds);
  };

  return (
    <div>
      <form onSubmit={login}>
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={Lcreds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Lcreds.password}
          onChange={handleChanges}
        />
        <button className='button1'>Sign in!</button>
      </form>
    </div>
  );
};
