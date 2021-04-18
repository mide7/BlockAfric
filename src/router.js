import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
      </Switch>
    </BrowserRou>
  );
}

export default router;
