import rootSaga from '@/sagas';
import {AnyAction, CombinedState, configureStore, combineReducers} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE} from 'next-redux-wrapper'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { IBookState } from './books';
import { UserState } from './users';


const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

interface RootStates {
	book: IBookState;
    user: UserState;
}
const rootReducer = (
	state: RootStates,
    action: AnyAction
) => {
    if(action.type === HYDRATE) {
        return{
            ...state, ...action.payload
        }
    }
    return combineReducers({
    })(state, action)
}

const makeStore = () =>{
    const store = configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        isDev? getDefaultMiddleware().concat(logger, sagaMiddleware) : getDefaultMiddleware(),
        devTools :isDev
    });
    sagaMiddleware.run(rootSaga)
    return store
}
export const wrapper = createWrapper(makeStore, {
    debug: isDev})

const store = makeStore();
export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;