/*
* @Author: docoder
* @Date:   2018-11-05 18:18:36
* @Email:  docoder@163.com
* @Last Modified by:   docoder
* @Last Modified time: 2018-12-04 13:24:12
*/
// 颜色集中管理
export default class Color {
    static white = 'white';
    static black = 'black';
    static gray = 'gray';
    static red = 'red';
    static blue = 'blue';

    
    static green = '#00E100';

    static primary = '#F44A4A';
    static primaryDisabled = '#F2939A';
    static dark = '#36404D';
    static gray1 = '#9EA3BB';
    static gray2 = '#EDEFF8';
    static bgGray = '#F3F3F6';
    static inputBgGray = '#F5F5F8';
    static shadowBlue = '#101B4F';
    static headerGray = '#F7F7FA';
    static textGray = '#7F8FA4';

    static WhiteWithAlpha = 'rgba(255, 255, 255, 0.5)';
    static WhiteTransparent = 'rgba(255, 255, 255, 0)';
    static BlackTransparent = 'rgba(0, 0, 0, 0)';



    static groupsBg = '#393939';
    static channelsBg = '#EEEEEE';
    static membersBg = Color.channelsBg;

    static inputActionColor = '#9B9B9B';
    static inputBorderColor = Color.inputActionColor;

    static emojiActiveBg = '#f6f6f6';
    static inputToolbarBorderColor = Color.emojiActiveBg;

    static placeholderColor = '#b2b2b2';
    static sendDisableColor = Color.placeholderColor;
    static sendActiveColor = Color.black;
}
global.Color = Color;