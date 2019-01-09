/*
 * @Author: Lisa 
 * @Date: 2018-12-30 11:49:45 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-09 16:00:36
 */
import React from "react";
import { Link, Route} from 'react-router-dom';
import './index.less';
import Header from '../Header'
import { Assets, Expend, Income } from '../../components/UI/Icon'
import {RouteWithSubRoutes} from '../../router'
import {
    Layout, Menu, Icon
} from 'antd';
  
const {
    Content, Sider,
} = Layout;

const Home = (props) => {
    const { collapsed, onCollapse, routes } = props;
    return (
            <Layout className="home-layout">
                <Layout>
                    <Sider
                        collapsible
                        onCollapse={onCollapse}
                        collapsed={collapsed}>
                        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                            <Menu.Item key="1">
                                <Link to="/home/assets">
                                    <Icon component={Assets} style={{fontSize: '17px'}}></Icon>
                                    <span>总资产</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/home/income">
                                    <Icon component={Expend} style={{fontSize: '17px'}}></Icon>
                                    <span>支出</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="3">
                                <Link to="/home/expend">
                                    <Icon component={Income} style={{fontSize: '17px'}}></Icon>
                                    <span>收入</span>
                                </Link>
                            </Menu.Item>
                        </Menu>
                    </Sider>
                    <Content>
                        <Header>Header</Header>
                        <div className="home-Content">
                        {routes.map((route, i) => (
                            <RouteWithSubRoutes key={i} {...route} />
                        ))}
                        </div>
                    </Content> 
                </Layout>
            </Layout>
    );
};
export default Home;


