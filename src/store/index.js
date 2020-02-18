import { createStore } from "redux";
import rootReducer from "../reducers/index";
import App from "../containers/App";

const store = createStore(rootReducer);

export default store;
