import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import "../css/Home.css";

function Home() {
  const [currencyValue, setcurrencyValue] = useState(0);
  return (
    <div className="d-flex flex-column">
      <div className="home-balance d-flex w-100 text-light border mb-3">
        <div className="d-flex flex-column w-100 align-items-center fw-bold border-end py-3">
          <span className="home-balance-header bg-light ">AFYA</span>
          <span className="fs-2 ">143.00</span>
          <span className="fs-6 fw-normal">Balance</span>
        </div>
        <div className="d-flex flex-column w-100 align-items-center fw-bold py-3">
          <span className="home-balance-header bg-light text-primary">ZAR</span>
          <span className="fs-2">R21.00</span>
          <span className="fs-6 fw-normal">Equivalent</span>
        </div>
      </div>
      <div className="currency mt-3">
        <div className="background-grey p-2">
          <span className="text-primary">Select Currency:</span>
        </div>
        <div className="mt-3 px-1">
          <div className="d-flex w-100 bg-secondary">
            <select className="home-select fw-bold" name="" id="">
              <option>AFYA</option>
              <option>ZAR</option>
            </select>
            <input
              type="number"
              value={currencyValue}
              onChange={(e) => setcurrencyValue(e.target.value)}
              className="w-100 home-input fw-bold ps-3"
              min={0}
            />
          </div>
          <div className="d-flex w-100 justify-content-around my-3">
            <PrimaryButton>Send</PrimaryButton>
            <PrimaryButton>Receive</PrimaryButton>
          </div>
        </div>
      </div>
      <div className="recent background-grey pb-4">
        <div className=" p-2 text-light fw-bold">Recent Activity</div>
        <div className="d-flex flex-column fw-bold fs-6 bg-light px-2 text-secondary">
          <div className="d-flex justify-content-between border-bottom p-2">
            <div className='me-2'>
              <img
                src="/images/download.jpg"
                alt="hiv test"
                className="home-recent-images"
              />
            </div>
            <div>
              <span className="me-2">HIV Blood Draw Test</span>
            </div>
            <div>A100</div>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2">
            <div className='me-2'>
              <img
                src="/images/download (1).jpg"
                alt="tb"
                className="home-recent-images"
              />
            </div>
            <div className="me-2">TB Radiology XRay</div>
            <div>A30</div>
          </div>
          <div className="d-flex justify-content-between border-bottom p-2 ">
            <div className='me-2'>
              <img
                src="/images/download (2).jpg"
                alt="bp check"
                className="home-recent-images"
              />
            </div>
            <div className='me-2'>Blood Pressure Check</div>
            <div>A10</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
