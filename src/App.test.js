import locationReducer from "../src/reducers/location";

jest.mock("axios");
const currentLocation = "London";

describe("App", () => {
  describe("Reducer", () => {
    it("should set the location in store", () => {
      const state = { currentLocation: "London" };
      const newState = locationReducer(state, {
        type: "location",
        payload: "London",
      });
      expect(newState).toEqual({ currentLocation });
    });
  });
});




// describe("Api", () => {
//   it("API returns correct results", async () => {
//     axios.get.mockResolvedValue({
//       obj: {
//         temp: 51.04,
//         feels_like: 49.35,
//         temp_min: 50,
//         temp_max: 52,
//         pressure: 1004,
//         humidity: 95,
//       },
//     });

//     const obj = await getWeatherForCity("London");
//     expect(obj.temp).toEqual("51.04");
//   });
// });
