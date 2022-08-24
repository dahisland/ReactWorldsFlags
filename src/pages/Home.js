import React from "react";
import Countries from "../components/Countries";
import Header from "../components/Header";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <div>
      <Header title={"ACCUEIL"} />
      <Navigation />
      <Countries />
    </div>
  );
};

export default Home;
