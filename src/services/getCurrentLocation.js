import axios from 'axios'
import config from "../config/default.json";

function getPosition() {
  let options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  return new Promise((res, rej) => {
    navigator.geolocation.getCurrentPosition(res, rej, options);
  });
}

export const getLocation = () => async dispatch => {
  try {
    const { coords } = await getPosition();
    const { latitude: lat, longitude: lon } = coords;
    const { data } = await axios.get(
      `${config.reverseGeo}${lat},${lon}&key=${config.reverseGeoKey}`
    );
    const fullAddress = data.plus_code.compound_code;
    let address = fullAddress.split(" ");
    address = `${address[1]}, ${address[2]}`;
    address = address.slice(0, -1);
    dispatch({
      type: "location",
      payload: address
    });
    return address;
  } catch (err) {
    console.error(err.message);
  }
};