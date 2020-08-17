import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Layout from "./Layout";
import BadgeNew from "../pages/BadgeNew";
import Badges from "../pages/Badges";
import BadgeEdit from "../pages/BadgeEdit";
import BadgeDetails from "../pages/BadgeDetailsContainer";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/badges" component={Badges} />
          <Route exact path="/badges/new" component={BadgeNew} />
          <Route dexact path="/badges/:badgeId/edit" component={BadgeEdit} />
          <Route dexact path="/badges/:badgeId" component={BadgeDetails} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
