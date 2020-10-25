import React from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import Header from "./Header";
import PrivateRoute from "./utils/PrivateRoute";
import AuthForm from "./AuthForm";
import Dashboard from "./dashboard/Dashboard";
import CreateTicket from "./dashboard/CreateTicket";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Switch>
          <Route path="/login" component={AuthForm} />
          <Route path="/register" component={AuthForm} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute path="/create-ticket" component={CreateTicket} />
          <Redirect to="/login" />
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default Router;
