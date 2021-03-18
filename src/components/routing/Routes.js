import React from 'react';
import { Route, Switch } from 'react-router-dom';
import WeatherForecast from "../WeatherForecast";

const Routes = props => {
  return (
    <section>
      <Switch>
        <Route exact path="/forecast" component={WeatherForecast} />
      </Switch>
    </section>
  );
};

export default Routes;
