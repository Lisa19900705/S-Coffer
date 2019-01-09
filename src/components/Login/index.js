/*
 * @Author: Lisa 
 * @Date: 2018-12-30 11:49:45 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-05 16:01:20
 */
import React from "react";
import './index.less';
import logoUrl from '../../common/image/logo.jpg';
import wchat from '../../common/image/wchat.png';
import wBo from '../../common/image/wBo.png';
import qq from '../../common/image/QQ.png';

import { 
    Avatar, 
    Input,
    Icon, 
    Button
} from 'antd';
const SendVCodeInput = Input.Search;

const Login = (props) => {
    const { phoneNumber, 
            onChangePhoneNumber, 
            verificationCode, 
            onChangeverificationCode, 
            getVerificationCode, 
            loginAction 
        } = props;
    const suffix = phoneNumber.length === 11 ? <Icon type="check-circle" theme="twoTone" /> : null;
    return (
        <div className="loginScreen">
            <div className={"logonPanel"}>
                <Avatar src={logoUrl} size={120}/>
                <div className={"slogan"}>
                    <span>{"想理财，用小猪存钱罐"}</span>
                </div>
                <div className="login-body">
                    <div className="line-between">
                        <span>{"免费注册或登陆"}</span>
                    </div>
                    <Input
                        className={"input-btn-height"}
                        placeholder="请输入手机号码"
                        prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        suffix={phoneNumber.length === 11 ? <Icon type="check-circle" theme="twoTone" twoToneColor="#1DA57A"/> : null}
                        value={phoneNumber}
                        maxLength={11}
                        onChange={onChangePhoneNumber}
                    />
                    <SendVCodeInput
                        placeholder="请输入验证码"
                        enterButton="获取验证码"
                        className={"input-sms-topBotm"}
                        onSearch={value => getVerificationCode()}
                        disabled={phoneNumber.length !== 11}
                        prefix={<Icon type="eye" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        value={verificationCode}
                        maxLength={6}
                        onChange={onChangeverificationCode}
                    />
                    <Button     
                        type="primary" 
                        disabled={phoneNumber.length !== 11 || verificationCode.length !== 6} 
                        onClick={loginAction}
                        className={"login-btn"}>
                        {"登陆"}</Button>
                </div>
                <div className={"logon-more-methed"}>
                    <div className="logon-more-methed-txt">{"更多登陆方式"}</div>
                    <Avatar src={wchat} size={30}/>
                    <Avatar src={qq} style={{ margin: '0px 15px' }} size={30}/>
                    <Avatar src={wBo} size={30}/>
                </div>
            </div>
        </div>
    );
};

export default Login;