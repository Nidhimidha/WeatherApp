import "./App.css";
import React, { Fragment, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CurrentTemp from "./components/CurrentTemp";
import Navigation from "./components/Navigation";
import { getLocation } from "./services/getCurrentLocation";
import { getWeatherForCity } from "./services/getWeatherForCity";
import { Provider } from "react-redux";
import store from "./store";
import Routes from "./components/routing/Routes";

const App = () => {
  useEffect(() => {
    store
      .dispatch(getLocation())
      .then((res) => store.dispatch(getWeatherForCity(res)))
      .catch((err) => {
        console.error(err.message);
      });
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navigation />
          <Switch>
            <Route exact path="/" component={CurrentTemp} />
            <Route component={Routes} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
};

export default App;
