
import { combineReducers } from 'redux';

import { reducer as authReducer, AuthState } from './screens/Auth/reducer';

export interface AppState {
    auth: AuthState
}

export enum GET_ACTION_FAIL {
    'GET_ACTION_FAIL',
}
export const getActionFailed = (message: string) => {
    return {
        type: GET_ACTION_FAIL.GET_ACTION_FAIL,
        errorMessage: message
    };
}

const rootReducer = combineReducers({
    auth: authReducer
});

export default rootReducer;