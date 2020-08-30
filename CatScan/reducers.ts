
import { combineReducers } from 'redux';

import { reducer as authReducer, AuthState } from './screens/Auth/reducer';
import { reducer as splashReducer, SplashState } from './screens/Splash/reducer';

export interface AppState {
    auth: AuthState,
    splash: SplashState
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
    auth: authReducer,
    splash: splashReducer
});

export default rootReducer;