import { createStore, applyMiddleware, compose } from "redux";
import { routerMiddleware } from "connected-react-router";
import thunk from "redux-thunk";
import rootReducer from "./modules";
import createBrowserHistory from "history/createBrowserHistory";

//let { task, tasks } = require("./reducers")


export const history = createBrowserHistory();
//const location = history.location;

export const initialState = {
    count: 0,
    isIncrementing: false,
    isDecrementing: false
}
const enhancers = []
const middleware = [
    thunk,
    routerMiddleware(history)
]

if (process.env.NODE_ENV === "development") {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__

    if (typeof devToolsExtension === "function") {
        enhancers.push(devToolsExtension())
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
)

export const store = createStore(
    rootReducer(history),
    initialState,
    composedEnhancers
)

store.subscribe(() => {
    localStorage["redux-store"] = JSON.stringify(store.getState())
})


