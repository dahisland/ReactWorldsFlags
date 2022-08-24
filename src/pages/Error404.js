import React from "react";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Error404 = () => {
  return (
    <div>
      <Header title={"Page not found"} />
      <Navigation />
      <div className="notFound">
        <h2>ERROR 404</h2>
        <p>Page not found</p>
      </div>
    </div>
  );
};

export default Error404;
