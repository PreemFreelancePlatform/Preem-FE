import React, { useState } from "react";
import { axiosWithAuth } from "../Utils/axiosWIthAuth";

export const JobPostForm = (props) => {
  const [info, setinfo] = useState({
    postname: "",
    description: "",
    tech: "",
  });

  const handleChange = (e) => {
    setinfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    axiosWithAuth()
      .post(`http://localhost:2019/customer/post/${props.id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.res));
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="postname"
          value={info.postname}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          value={info.description}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="password"
          value={info.tech}
          onChange={handleChange}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};
