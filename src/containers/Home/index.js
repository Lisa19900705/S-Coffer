/*
 * @Author: Lisa 
 * @Date: 2018-12-30 11:33:33 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-08 18:54:39
 */
import React from "react";
import HomeScreen from '../../components/Home/index';

export default class Home extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }
  render() {
    return (
        <HomeScreen 
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
          {...this.props}/>
    );
  }
}