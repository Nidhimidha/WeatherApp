const initialState = {
  currentLocation: null
};

export default function locationReducer(state=initialState, action) {
  const {type, payload} = action;
  switch (type) {
    case "location":
      return {...state, currentLocation: payload};
    default:
        return state;
  }
}