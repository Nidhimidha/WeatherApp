import config from "../config/default.json";
import axios from "axios";

export const getWeatherForCity = (city) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${config.openWeather}${city}&units=Imperial&appid=${config.openWeatherKey}`
    );
    dispatch({
      type: "currentWeather",
      payload: res.data.main.temp,
    });
    return res;
  } catch (err) {
    console.error(err.message);
  }
};
