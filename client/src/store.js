import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";

export default initialState => {
  initialState =
    JSON.parse(window.localStorage.getItem('state')) || initialState;

  const middleware = [thunk];

  // eslint-disable-next-line no-underscore-dangle
  let devTools = window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();

  if (process.env.NODE_ENV === 'prod' || process.env.NODE_ENV === 'production') {
    devTools = a => a;
  };

  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(...middleware),
      devTools 
    )
  );

  store.subscribe(() => {
    const state = store.getState();
    const persist = {
      cart: state.cart
    };

    window.localStorage.setItem('state', JSON.stringify(persist));
  });

  return store;
};