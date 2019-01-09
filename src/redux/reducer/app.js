/*
* @Author: docoder
* @Date:   2018-11-05 12:34:35
* @Email:  docoder@163.com
 * @Last Modified by: Lisa
 * @Last Modified time: 2018-12-20 17:54:04
*/

const initialState = {
    requestQuantity: 0, // 当前应用中正在进行的API请求数
    error: null, // 应用全局错误信息
    indicator: null,
    myInfo: {}
};

// action types
export const types = {
    START_REQUEST: 'APP/START_REQUEST', // 开始发送请求
    FINISH_REQUEST: 'APP/FINISH_REQUEST', // 请求结束
    SET_ERROR: 'APP/SET_ERROR', // 设置错误信息
    REMOVE_ERROR: 'APP/REMOVE_ERROR', // 删除错误信息
    SHOW_INDICATOR: 'APP/SHOW_INDICATOR', // 显示提升信息
    HIDE_INDICATOR: 'APP/HIDE_INDICATOR', // 隐藏提升信息
    GET_MY_INFO: 'APP/GET_MY_INFO'
};

// action creators
export const actions = {
    startRequest: () => ({
        type: types.START_REQUEST
    }),
    finishRequest: () => ({
        type: types.FINISH_REQUEST
    }),
    setError: error => ({
        type: types.SET_ERROR,
        error
    }),
    removeError: () => ({
        type: types.REMOVE_ERROR
    }),
    showIndicator: (type, message) => dispatch => {
        dispatch({
            type: types.SHOW_INDICATOR,
            payload: { type, message }
        });
        if (type !== 'loading') {
            setTimeout(() => {
                dispatch({ type: types.HIDE_INDICATOR })
            }, 1500);
        }
    },
    getMyInfoSuccess: (data) => ({
        type: types.GET_MY_INFO,
        payload: data
    })
};


// reducers
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case types.START_REQUEST:
            // 每接收一个API请求开始的action，requestQuantity加1
            return { ...state, requestQuantity: state.requestQuantity + 1};
        case types.FINISH_REQUEST:
            // 每接收一个API请求结束的action，requestQuantity减1
            return { ...state, requestQuantity: state.requestQuantity - 1};
        case types.SET_ERROR:
            return { ...state, error: action.error};
        case types.REMOVE_ERROR:
            return { ...state, error: null };
        case types.SHOW_INDICATOR:
            return { ...state, indicator: { type: action.payload.type, message: action.payload.message } };
        case types.HIDE_INDICATOR:
            return { ...state, indicator: null };
        case types.GET_MY_INFO: 
            return { ...state, myInfo: action.payload}
        default:
            return state;
    }
};

export default reducer;

// selectors
export const getError = state => {
    return state.app.error;
};
export const getIndicator = state => {
    return state.app.indicator;
};

export const getRequestQuantity = state => {
    return state.app.requestQuantity;
};
export const getMyInfo = state => {
    return state.app.myInfo
};

