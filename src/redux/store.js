import { createStore } from "redux";

import reducers from "./reducers/index";

const store = createStore(reducers,{},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;


//store contain a cople of arguments- 1st arguments is reducers and 2nd arguments is state means the empty state