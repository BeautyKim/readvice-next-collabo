import rootSaga from '@/modules/sagas';
import {AnyAction, CombinedState, configureStore, combineReducers} from '@reduxjs/toolkit'
import {createWrapper, HYDRATE, MakeStore} from 'next-redux-wrapper'
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga'
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import userReducer from './slices/userSlice'
import bookReducer from './slices/bookSlice'
import commentReducer from './slices/commentSlice'

const isDev = process.env.NODE_ENV ==='development'
const sagaMiddleware = createSagaMiddleware()

const combinedReducer = combineReducers({
    user: userReducer,
    book: bookReducer,
    comment: commentReducer,
})
const rootReducer = (
	state: ReturnType<typeof combinedReducer>,
    action: AnyAction
)  => {
    if(action.payload === HYDRATE) { 
        return{
            ...state,
            ...action.payload 
        }
    } else {
    return combinedReducer(state,action)
    }
}
// const makeStore = () =>{
//     const store = 
//     configureStore({
//         reducer:{ rootReducer },
//         middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({serializableCheck: false})
//             .prepend(sagaMiddleware)
//             .concat(logger),
//         devTools : isDev
//     });
    
//     sagaMiddleware.run(rootSaga)
//     return store
// }

// const store = rootReducer; 

const makeStore = () =>{
    const store = 
    configureStore({
        reducer:{ rootReducer },
        middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false})
            .prepend(sagaMiddleware)
            .concat(logger),
        devTools : isDev
    });
    
    sagaMiddleware.run(rootSaga)
    return store
}

const store = rootReducer; 

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = ReturnType<typeof store>["dispatch"];
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const wrapper = createWrapper(makeStore)
export default store;