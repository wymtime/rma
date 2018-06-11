export const RECEIVE_INITIAL_DATA = "RECEIVE_INTITAL_DATA";
export const TOGGLE_PANELS = "TOGGLE_PANELS";

import { fakeFetchData } from '../util/api_util';

export const receiveInitialData = (data) => ({
    type: RECEIVE_INITIAL_DATA,
    data: data
});

export const togglePanels = () => ({
    type: TOGGLE_PANELS
});

export const requestInitialData = () => (dispatch) => {
    return fakeFetchData().then((data) => (
        dispatch(receiveInitialData(data))
    ));
};
