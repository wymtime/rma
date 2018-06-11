import { combineReducers } from 'redux'

import header from './header_reducer'
import content from './content_reducer'

const rootReducer = combineReducers({
    header,
    content
})

export default rootReducer
