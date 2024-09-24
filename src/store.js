//import{ applyMiddleware, createStore } from "redux";
// import { applyMiddleware,  } from "redux";
// import rootReducer from "./reducers";
// import thunk from 'redux-thunk'

// const store = createStore(
//     rootReducer,
//     composeWithDevTools(applyMiddleware(thunk))
// );

// export default store


import rootReducer from "./reducers";
import {configureStore} from '@reduxjs/toolkit'

const store = configureStore({
    reducer : rootReducer,
    }
);
export default store 