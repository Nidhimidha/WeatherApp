import config from "../config/default.json";
import axios from 'axios';
import moment from "moment";
import _ from 'lodash';

export const getWeatherForecast = city => async dispatch => {
  try {
    const res = await axios.get(
      `${config.openWeatherForecast}${city}&units=Imperial&appid=${config.openWeatherKey}`
    );
    let result = res.data.list.map(val=>{return {date: val.dt_txt, temp: val.main.temp, icon: val.weather[0].icon}});
    let today = [];
    let forecast = [];
    if (result !== null && result.length !== 0) {
      result.forEach(val=> (moment(val.date).isSame(new Date(), "day"))? today.push(val): forecast.push(val));
    }
    let groupedData = _.chain(forecast).groupBy(val => moment(val.date).format("DD")).value();
    dispatch({
      type: "todayForecast",
      payload: today
    });
    dispatch({
      type: "futureForecast",
      payload: groupedData
    });
  } catch (err) {
    console.error(err.message);
  }
};