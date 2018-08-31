import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import { routerMiddleware } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import reducerRoot from './store/reducers'
import ThunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger'

const history = createHistory()
const middleware = routerMiddleware(history)
const logger = createLogger()

const store = createStore(
    reducerRoot,
    applyMiddleware(
        middleware,
        ThunkMiddleware,
        logger
    )
)
ReactDOM.render((
    <Provider store={store}>
        < App history={history} />
    </Provider>
),document.querySelector('#app'))