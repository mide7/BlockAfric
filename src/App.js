import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ActivityPage from "./ActivityPage";
import EarnPage from "./EarnPage";
import HomePage from "./HomePage";
import MarketPage from "./MarketPage";
import WalletPage from "./WalletPage";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/activity" component={ActivityPage} />
        <Route exact path="/wallet" component={WalletPage} />
        <Route exact path="/market" component={MarketPage} />
        <Route exact path="/earn" component={EarnPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
