import { fakeFetchData } from '../util/api_util'

export const RECEIVE_INITIAL_DATA = 'RECEIVE_INTITAL_DATA'
export const TOGGLE_CONTENT = 'TOGGLE_CONTENT'
export const TOGGLE_PANELS = 'TOGGLE_PANELS'

export const receiveInitialData = (data) => ({
    type: RECEIVE_INITIAL_DATA,
    data: data
})

export const toggleContent = () => ({
    type: TOGGLE_CONTENT
})

export const togglePanels = () => ({
    type: TOGGLE_PANELS
})

export const requestInitialData = () => (dispatch) => {
    return fakeFetchData().then((data) => (
        dispatch(receiveInitialData(data))
    ))
}
