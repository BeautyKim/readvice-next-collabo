import rootSaga from '@/sagas';
import {AnyAction, CombinedState, configureStore, combineReducers} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import userReducer from './users'
import bookReducer from './books'
import commentReducer from './comments'

const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

const combineReducer = combineReducers({
    user: userReducer,
    book: bookReducer,
    comment: commentReducer,
})

const rootReducer = (
        state: ReturnType<typeof combineReducer>,
        action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state,
            ...action.payload
        }
    } else {
    return combineReducer(state, action)
    }
}

const makeStore = () =>{
    const store = configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
        .prepend(sagaMiddleware)
        .concat(logger),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}

const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper(makeStore, {debug: isDev})

export default store;