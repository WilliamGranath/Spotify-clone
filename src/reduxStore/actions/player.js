import * as actionTypes from '../actions/actionTypes';

export const addDeviceId = (device_id) => ({ type: actionTypes.ADD_DEVICE_ID, payload: device_id });
export const play = () => ({ type: actionTypes.PLAY });
export const pause = () => ({ type: actionTypes.PAUSE });
