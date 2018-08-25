import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import reducerRoot from './store/reducers'

import ThunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const logger = createLogger()
const store = createStore(
    reducerRoot,
    applyMiddleware(
        ThunkMiddleware,
        logger
    )
)

ReactDOM.render((
    <Provider store={store}>
        <App />
    </Provider>
),document.querySelector('#app'))