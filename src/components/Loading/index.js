/*
 * @Author: Lisa 
 * @Date: 2019-01-03 18:44:35 
 * @Last Modified by: Lisa
 * @Last Modified time: 2019-01-07 22:59:01
 */
import React from 'react';

const Loading = (props) => {
    if (props.error) {
        return <div>Error!</div>; 
    } else if (props.timedOut) {
        return <div>Taking a long time...</div>;
    } else if (props.pastDelay) {
        return <div>Loading...</div>;
    } else {
        return null;
    }
  };
export default Loading;