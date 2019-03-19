import LoadingReducer from './LoadingReducer';
import ImagesReducer from './ImagesReducer';
import ErrorReducer from './errorReducer';

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    LoadingReducer,
    ImagesReducer,
    ErrorReducer
})

export default rootReducer