import React from "react";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
      <div className="logo">
        <p>React world's FLAGS</p>
        <picture>
          <img src="./flag-logo.png" alt="logo"></img>
        </picture>
      </div>
    </header>
  );
};

export default Header;
