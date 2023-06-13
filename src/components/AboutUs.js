import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";

const AboutUs = () => {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/", { replace: true });
  };
  return (
    <div>
      <h1>About Us</h1>
      <button onClick={clickHandler}>GO HOME</button>
      <ul>
        <li>
          <Link to="programmers">Progammer</Link>
        </li>
        <li>
          <Link to="drivers">Drivers</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};
export default AboutUs;
