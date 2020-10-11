import React, { useState } from "react";
import { axiosWithAuth } from "../utils/axiosWIthAuth";
import { useHistory } from "react-router-dom";

export const InvestorSignIn = () => {
  let history = useHistory()
  const [Icreds, setICreds] = useState({
    username: "",
    password: "",
  });
  const handleChanges = (e) => {
    setICreds({
      ...Icreds,
      [e.target.name]: e.target.value,
    });
  };

  const submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("/api/auth/investor/register", Icreds)
      .then((res) => {
        console.log(res);
        history.push('/login')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <form onSubmit={submit}>
        <input
          className="f2"
          type="text"
          placeholder="username"
          name="username"
          value={Icreds.username}
          onChange={handleChanges}
        />
        <br />
        <br />
        <input
          className="f1"
          type="password"
          placeholder="password"
          name="password"
          value={Icreds.password}
          onChange={handleChanges}
        />
        <button className='button1'>Sign up!</button>
      </form>
    </div>
  );
};
