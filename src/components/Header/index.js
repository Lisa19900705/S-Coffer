/*
 * @Author: Lisa 
 * @Date: 2018-12-30 11:49:45 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-08 15:46:27
 */
import React from "react";
import './index.less';
import xiaozhu from '../../common/image/xiaozhu.png';
import { 
    Avatar,
} from 'antd';

const Header = (props) => {
    return (
        <div className="header">
            <div className="top-grad"></div>
             <div className="logo">
                <div className="logo-image">
                    <Avatar src={xiaozhu} size={40}/>
                </div>
                <div className="logo-txt">小猪存钱罐</div>
            </div>
        </div>
    );
};

export default Header;