import React from "react";
import "../styles/BottomNavbar.css";
import { Link, Outlet, useLocation } from "react-router-dom";
import { FaHome, FaVideo, FaTv, FaInfoCircle } from "react-icons/fa";

const BottomNavbar = () => {
  const { pathname } = useLocation();
  return (
    <>
      <Outlet />
      <div className="links-div">
        <Link
          to="/"
          className={pathname === "/" ? "active link home" : "link home"}
        >
          <FaHome />
          <h3>Home</h3>
        </Link>
        <Link
          to="/movies"
          className={
            pathname === "/movies" ? "active link movies" : "link movies"
          }
        >
          <FaVideo />
          <h3>Movies</h3>
        </Link>
        <Link
          to="/tvshows"
          className={
            pathname === "/tvshows" ? "active link tvshows" : "link tvshows"
          }
        >
          <FaTv />
          <h3>Tv Shows</h3>
        </Link>{" "}
        <Link
          to="/about"
          className={pathname === "/about" ? "active link about" : "link about"}
        >
          <FaInfoCircle style={{ fontSize: "1.8rem" }} />
          <h3>About</h3>
        </Link>
      </div>
    </>
  );
};

export default BottomNavbar;
