
import { AUTHENTICATE } from './actions';
import updateObject from '../../helpers/updateObject';

export interface AuthState {
    isAuthorized: boolean;
    userData: any
}

const initialState: AuthState = {
    isAuthorized: false,
    userData: undefined
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case AUTHENTICATE.REQUEST:
            return updateObject(state, { isAuthorized: false, userData: undefined });
        case AUTHENTICATE.SUCCESS:
            return updateObject(state, { isAuthorized: true, userData: action.userData })

        
        default:
            return state;
    }
}


