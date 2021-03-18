const initialState = {
  todayForecast: null,
  futureForecast: null
};

export default function forecastReducer(state=initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case "todayForecast":
      return {...state, todayForecast: payload};
    case "futureForecast":
      return {...state, futureForecast: payload};
    default:
        return state;
  }
}