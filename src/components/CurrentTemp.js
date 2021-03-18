import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Spinner from "../layouts/Spinner";
import { Link } from "react-router-dom";

export const CurrentTemp = () => {
  let city = useSelector((state) => state.location.currentLocation);
  let currentWeather = useSelector((state) => state.weather.currentWeather);
  return (
    <Fragment>
      {city === null ? (
        <Spinner />
      ) : (
        <section className="center">
          <div className="common currentInner">Current Weather for {city}</div>
          <div className="common currentWeather">{currentWeather}</div>
          <div className="common">
            <Link className="button-display" to="/forecast">
              Forecast
            </Link>
          </div>
        </section>
      )}
    </Fragment>
  );
};

export default CurrentTemp;
