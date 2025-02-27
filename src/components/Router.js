import React from "react";
import { Switch, Route } from "react-router-dom";
import CharacterList from "./CharacterList";
import WelcomePage from "./WelcomePage";
import LocationsList from "./LocationsList";
import EpisodesList from "./EpisodesList";

export default function Router() {
  return (
    <div className="page-view ui bottom attached segment active tab">
      <Switch>
        <Route path="/characters" component={CharacterList} />
        <Route path="/episodes" component={EpisodesList} />
        <Route path="/locations" component={LocationsList} />
        <Route component={WelcomePage} />
      </Switch>
    </div>
  );
}
