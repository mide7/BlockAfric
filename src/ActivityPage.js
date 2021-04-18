import React from "react";
import Header from "./Header";
import Navigation from "./Navigation";

function ActivityPage() {
  return (
    <div className="Page-layout">
      <Header />
      <div className='ps-2 color-primary'>
        <h1>Activity</h1>
      </div>
      <Navigation />
    </div>
  );
}

export default ActivityPage;
