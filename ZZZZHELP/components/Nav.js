import React from "react";
import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div>
      <ul className='navbar'>
        <li>
          <Link className='navLinks' to="/login">Login</Link>
        </li>
        <li>
          <Link className='navLinks' to="/projects">See all projects</Link>
        </li>
      </ul>
    </div>
  );
};
