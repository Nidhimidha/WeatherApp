const initialState = {
  currentWeather: null,
};

export default function weatherReducer(state=initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case "currentWeather":
      return {...state, currentWeather: payload};
    default:
        return state;
  }


}