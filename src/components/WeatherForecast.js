import React, { Fragment, useEffect } from "react";
import { Link } from "react-router-dom";
import WeatherCard from "./WeatherCard";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getWeatherForecast } from "../services/getWeatherForecast";
import Spinner from "../layouts/Spinner";
import { Tabs, Tab } from "react-bootstrap";
import moment from "moment";

const WeatherForecast = ({
  getWeatherForecast,
  forecast,
  city,
  todayForecast,
}) => {
  useEffect(() => {
    getWeatherForecast(city);
  }, [getWeatherForecast, city]);
  return forecast === null || forecast === undefined ? (
    <Spinner />
  ) : (
    <Fragment>
      <div>
        <Tabs>
          {todayForecast.map((val) => (
            <Tab style={{ color: "salmon" }} eventKey="0" title="Today">
              <WeatherCard key={val.date} forecast={val} />
            </Tab>
          ))}

          {Object.keys(forecast).map((val, i) => {
            return (
              <Tab
                style={{ color: "salmon" }}
                eventKey={i + 1}
                title={moment(forecast[val][0].date).format("MM-DD")}
              >
                {forecast[val].map((record) => (
                  <WeatherCard key={record.date} forecast={record} />
                ))}
              </Tab>
            );
          })}
        </Tabs>
      </div>
      <br />
      <div className="common">
        <Link className="button-display" to="/">
          Go Back
        </Link>
      </div>
    </Fragment>
  );
};

WeatherForecast.propTypes = {
  getWeatherForecast: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  forecast: state.forecast.futureForecast,
  city: state.location.currentLocation,
  todayForecast: state.forecast.todayForecast,
});

export default connect(mapStateToProps, { getWeatherForecast })(
  WeatherForecast
);
