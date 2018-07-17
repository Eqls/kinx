import { init } from "@rematch/core";

const kinx = {
  state: [],
  reducers: {
    save(state, payload) {
      state = payload;
      console.log(state);
      return state;
    }
  }
};

const store = init({
  name: "kinxStore",
  models: {
    kinx
  }
});

export default store;
