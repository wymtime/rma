import { RECEIVE_INITIAL_DATA, TOGGLE_PANELS } from '../actions/actions';

const _defaultState = {
    contentA: { text: "", visible: true }, 
    contentB: { text: "", visible: false }
};

const contentReducer = (state = _defaultState, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_INITIAL_DATA: {
            const { contentA, contentB } = action.data;
            const newState = Object.assign({}, state);
            newState.contentA.text = contentA;
            newState.contentB.text = contentB;
            return newState;
        }
        case TOGGLE_PANELS: {
            const newState = Object.assign({}, state);
            newState.contentA.visible = !newState.contentA.visible;
            newState.contentB.visible = !newState.contentB.visible;
            return newState;
        }
        default:
            return state;
    }
}

export default contentReducer;