/*
* @Author: docoder
* @Date:   2018-11-05 18:12:51
* @Email:  docoder@163.com
 * @Last Modified by: Lisa
 * @Last Modified time: 2018-12-28 13:45:01
*/
import {
    Dimensions,
    PixelRatio,
    Platform
} from 'react-native';
import './Color';
export const deviceWidth = Dimensions.get('window').width; //设备的宽度
export const deviceHeight = Dimensions.get('window').height; //设备的高度

export function Log(...params) {
    if (__DEV__) {
        // debug模式
        console.log(...params)
    } else {
        // release模式
    }
}


global.WIDTH = deviceWidth;
global.HEIGHT = deviceHeight;
global.Log = Log;
global.SOCKET_ENDPOINT = 'http://chat.test.flareim.com';
