import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'
import logger from 'redux-logger'
import { CounterReducer } from './counter'

/* Create root reducer, containing all features of the application */
const rootReducer = combineReducers({
    count: CounterReducer,
})


const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(logger),

        /* preloadedState, */ devToolsEnhancer({})
    )
) 

export default store
