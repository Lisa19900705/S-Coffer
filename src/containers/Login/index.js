/*
 * @Author: Lisa 
 * @Date: 2018-12-30 00:06:55 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-08 21:22:37
 */
import React from "react";
import LoginScreen from '../../components/Login/index';
import httpReqDatas from '../../utils/service';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            phoneNumber: '',
            verificationCode: '',
            redirectToReferrer: false
        };
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeverificationCode = this.onChangeverificationCode.bind(this);
        this.getVerificationCode = this.getVerificationCode.bind(this);
        this.loginAction = this.loginAction.bind(this);
    
        
    }

    onChangePhoneNumber(e) {
        this.setState({ phoneNumber: e.target.value });
    }
    onChangeverificationCode(e) {
        this.setState({ verificationCode: e.target.value });
    }
    getVerificationCode() {
        httpReqDatas('getVcode',{phoneNumber: this.state.phoneNumber});
    }
    loginAction() {
        const reqParams = {
            phoneNumber: this.state.phoneNumber,
            verificationCode: this.state.verificationCode
        }
        httpReqDatas('login',reqParams).then( () => {
            this.props.history.push("/home/assets");
        });
    }
    render() {
        let { from } = this.props.location.state || { from: { pathname: "/" } };
        let { redirectToReferrer } = this.state;
    
        if (redirectToReferrer) return <Redirect to={from} />;
        return (
            <LoginScreen 
                refs={node => this.phoneNumberInput = node}
                phoneNumber={this.state.phoneNumber}
                onChangePhoneNumber={this.onChangePhoneNumber}
                verificationCode={this.state.verificationCode}
                onChangeverificationCode={this.onChangeverificationCode}
                getVerificationCode={this.getVerificationCode}
                loginAction={this.loginAction}
                />
        );
    }
}

export default Login;