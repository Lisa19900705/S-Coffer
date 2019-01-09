/*
 * @Author: Lisa 
 * @Date: 2019-01-02 16:03:21 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-09 15:59:20
 */
import React from 'react'
import { BrowserRouter, Switch, Route, Redirect, IndexRoute} from 'react-router-dom'

import Home from '../containers/Home'
import Logon from '../containers/Login'
import Assets from '../containers/Assets'
import Expend from '../containers/Expend'
import Income from '../containers/Income'
export const RouteWithSubRoutes = route => {
    return (
      <Route
        path={route.path}
        render={props => (
          <route.component {...props} routes={route.routes} />
        )}
      />
    );
}
const routes = [
    {
        path: "/logon",
        component: Logon
    },
    {
        path: "/home",
        component: Home,
        routes: [
          {
            path: "/home/assets",
            component: Assets
          },
          {
            path: "/home/income",
            component: Income
          },
          {
            path: "/home/expend",
            component: Expend
          }
        ]
    }
    // {
    //     path: "/",
    //     exact: true,
    //     main: () => <Assets />
    // },
    // {
    //    path: "/home/assets",
    //    main: () => <Assets />
    // },
    // {
    //    path: "/home/income",
    //    main: () => <Income />
    // },
    // {
    //     path: "/home/expend",
    //     main: () => <Expend />
    // }
];
const AppRouter = (props) => {
    const from = props.isAuthenticated ? { pathname: "/home" } : { pathname: "/logon" };
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to={from}/>
                </Route>
                {   routes.map((route, i) => (
                        <RouteWithSubRoutes key={i} {...route} />
                    ))
                }
                {/* <Route exact path="/">
                    <Redirect to={from}/>
                </Route>
                <Home path={"/home"}> 
                    {routes.map((route, index) => (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            component={route.main}/>
                    ))}
                </Home>
                <Route path="/logon" component={Logon} /> */}
            </Switch>
        </BrowserRouter>
    ) 
}

export default AppRouter;

