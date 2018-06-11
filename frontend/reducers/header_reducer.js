import { RECEIVE_INITIAL_DATA } from '../actions/actions';

const _defaultState = { data: [] };

const headerReducer = (state = _defaultState, action) => {
    Object.freeze(state);

    switch(action.type) {
        case RECEIVE_INITIAL_DATA:
            const headerData = action.data.headerData;
            return Object.assign({}, state, {data: headerData});
        default:
            return state;
    }
}

export default headerReducer;