import { combineReducers } from 'redux';
import commentReducer from './index';
import authReducer from '../auth/auth';

const reducers = combineReducers({
    comments: commentReducer,
    auths:authReducer
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;