/*
 * @Author: Lisa 
 * @Date: 2018-12-27 14:25:33 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-09 16:07:08
 */
import React from "react";
import Loadable from 'react-loadable';
import Loading from './../../components/Loading';

let LoadableAppRouter = Loadable({
  loader: () => import('./../../router'),
  loading: Loading,
  delay: 400,
  timeout: 10000,
});
export default class App extends React.Component {
  constructor(){
    super();
  }
  
  render() {
    return <LoadableAppRouter isAuthenticated={false}/>
  }
}