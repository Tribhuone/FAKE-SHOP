// It is centralized store , where whole state's are stored of JavaScript Application.

import { legacy_createStore as createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
