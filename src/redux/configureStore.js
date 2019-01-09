/*
* @Author: docoder
* @Date:   2018-11-05 11:12:37
* @Email:  docoder@163.com
 * @Last Modified by: Lisa
 * @Last Modified time: 2018-12-27 14:55:18
*/
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";


let finalCreateStore = applyMiddleware(thunk)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState);
  // 支持reducer的热加载
  if (process.env.NODE_ENV !== "production" && module.hot) {
    module.hot.accept("./reducer", () =>
        store.replaceReducer(require("./reducer"))
    );
  }

  return store;
}
