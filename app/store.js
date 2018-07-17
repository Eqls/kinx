import { init } from "@rematch/core";
import { AsyncStorage } from "react-native";

const kinx = {
  state: [],
  reducers: {
    save(state, payload) {
      state = payload;
      console.log(state);
      return state;
    },
    saveLocal(state, payload) {
      state = payload;
      AsyncStorage.setItem("ComparedData", JSON.stringify(state));
      return state;
    },
    getLocal(state, payload) {
      state = JSON.parse(payload);
      console.log("state in getlocal", state);
      return state;
    }
  },
  effects: dispatch => ({
    async asyncGetLocal() {
      var x = await AsyncStorage.getItem("ComparedData");
      console.log("bs", x);
      this.getLocal(x);
    }
  })
};

const store = init({
  name: "kinxStore",
  models: {
    kinx
  }
});

export default store;
