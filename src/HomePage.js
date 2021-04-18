import React from "react";
import Header from "./Header";
import Home from "./Home";
import Navigation from "./Navigation";

function HomePage() {
  return (
    <div className='Page-layout'>
      <Header />
      <Home />
      <Navigation />
    </div>
  );
}

export default HomePage;
