import { createStore } from "redux";
import mainReducer from "../reducers/main-reducer";

const store = createStore(mainReducer);

export { store };
