import React from "react";
import moment from "moment";
import { Card } from "react-bootstrap";

export const WeatherCard = ({ forecast }) => {
  var iconurl = "http://openweathermap.org/img/w/" + forecast.icon + ".png";
  return (
    <Card style={{ width: "29.5rem" }}>
      <div className="cards">
        <div>
          <Card.Title style={{ marginLeft: "3rem" }}>
            {moment(forecast.date).format("hh:mm a")}
          </Card.Title>
          <Card.Text
            style={{ marginLeft: "3rem" }}
            className="font-weight-bold"
          >
            {forecast.temp}
          </Card.Text>
        </div>
        <div>
          <Card.Img
            style={{
              width: "3rem",
              marginRight: "5rem",
            }}
            src={iconurl}
          />
        </div>
      </div>
    </Card>
  );
};

export default WeatherCard;
