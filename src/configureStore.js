import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import productsReducer from "./reducers/products";
import cartReducer from "./reducers/cart";
import collectionReducer from "./reducers/collection";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      products: productsReducer,
      cart: cartReducer,
      collections: collectionReducer,
    }),
    composeEnhancer(applyMiddleware(thunk))
  );

  return store;
};