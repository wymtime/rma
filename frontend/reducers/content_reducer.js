import { RECEIVE_INITIAL_DATA, TOGGLE_CONTENT } from '../actions/actions'

const _defaultState = {
    visible: true,
    contentA: { text: '' },
    contentB: { text: '' }
}

const contentReducer = (state = _defaultState, action) => {
    Object.freeze(state)
    switch (action.type) {
    case RECEIVE_INITIAL_DATA: {
        const { contentA, contentB } = action.data
        const newState = Object.assign({}, state)
        newState.contentA.text = contentA
        newState.contentB.text = contentB
        return newState
    }
    case TOGGLE_CONTENT: {
        const newState = Object.assign({}, state)
        newState.visible = !newState.visible
        return newState
    }
    default:
        return state
    }
}

export default contentReducer
