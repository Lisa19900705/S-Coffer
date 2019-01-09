/*
 * @Author: Lisa 
 * @Date: 2018-12-27 14:34:01 
 * @Last Modified by: Lisa
 * @Last Modified time: 2018-12-27 14:34:43
 */
import { combineReducers } from "redux";
import app from "./app";
// 合并所有模块的reducer成一个根reducer
const rootReducer = combineReducers({
  app
});

export default rootReducer;