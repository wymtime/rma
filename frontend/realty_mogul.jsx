import React from 'react'
import ReactDOM from 'react-dom'

import Root from './root'

import configureStore from './store/store'

import { requestInitialData } from './actions/actions'

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore()

    store.dispatch(requestInitialData())

    const rootEL = document.getElementById('root')
    ReactDOM.render(<Root store={store} />, rootEL)
})