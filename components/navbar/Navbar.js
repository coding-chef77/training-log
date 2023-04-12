import React from "react";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt=""
        />
        <span className="ml-2">React Bootstrap</span>
      </a>
    </nav>
  );
}
