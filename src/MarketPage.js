import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function MarketPage() {
  return (
    <div className='Page-layout'>
      <Header />
      <div className='ps-2 color-primary'>
        <h1>Market</h1>
      </div>
    <Navigation />
  </div>
  );
}

export default MarketPage;
