
import { combineReducers } from 'redux';

import { reducer as authReducer, AuthState } from './screens/Auth/reducer';

export interface AppState {
    auth: AuthState,
}

const rootReducer = combineReducers({
    auth: authReducer,
});

export default rootReducer;