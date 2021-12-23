import { createStore } from "redux";

const initialState = {
  display: "DISPLAY",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "DISPLAY_CHANGE":
      return { ...state, display: action.payload };
    default:
      return state;
  }
};
export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
