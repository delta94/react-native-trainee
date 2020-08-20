
import { AUTHENTICATE, AUTHENTICATE_FAIL } from './actions';
import updateObject from '../../helpers/updateObject';
import { GET_ACTION_FAIL } from '../../reducers';

export interface AuthState {
    isAuthorized: boolean;
    userNotConfirmed: boolean;
    userData: any;
    errorMessage?: string
    isError?: boolean;
    validationMessage?: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    userNotConfirmed: false,
    userData: undefined
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ACTION_FAIL.GET_ACTION_FAIL:
            return updateObject(state, { isError: true, errorMessage: action.errorMessage })
        case AUTHENTICATE.REQUEST:
            return updateObject(state, { isAuthorized: false });
        case AUTHENTICATE.SUCCESS:
            return updateObject(state, { isAuthorized: true })
        case AUTHENTICATE_FAIL.USER_NOT_CONFIRMED_EXCEPTION:
            return updateObject(state, { userNotConfirmed: true, validationMessage: action.validationMessage })
        case AUTHENTICATE_FAIL.NOT_AUTHORIZED_EXCEPTION:
            return updateObject(state, { validationMessage: action.validationMessage })

        default:
            return state;
    }
}


