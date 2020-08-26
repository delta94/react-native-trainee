
import { AUTHENTICATE, AUTHENTICATE_FAIL, SIGN_UP, CONFIRM_USER, CHECK_AUTH, LOGOUT } from './actions';
import updateObject from '../../helpers/updateObject';
import { GET_ACTION_FAIL } from '../../reducers';

export interface UserData {
    userName: string
}

export interface AuthState {
    isAuthorized: boolean;
    userNotConfirmed: boolean;
    userData?: UserData;
    errorMessage?: string
    isError?: boolean;
    validationMessage?: string;
    signUpSuccess?: boolean;
}

const initialState: AuthState = {
    isAuthorized: false,
    userNotConfirmed: false
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ACTION_FAIL.GET_ACTION_FAIL:
            return updateObject(state, { isError: true, errorMessage: action.errorMessage });
        case AUTHENTICATE.REQUEST:
            return updateObject(state, { isAuthorized: false });
        case AUTHENTICATE.SUCCESS:
            return updateObject(state, { isAuthorized: true, userData : action.userData, validationMessage : undefined  });
        case AUTHENTICATE_FAIL.USER_NOT_CONFIRMED_EXCEPTION:
            return updateObject(state, { userNotConfirmed: true, validationMessage: action.validationMessage, userData: { userName: action.userName } });
        case AUTHENTICATE_FAIL.NOT_AUTHORIZED_EXCEPTION:
            return updateObject(state, { validationMessage: action.validationMessage });
        case SIGN_UP.REQUEST:
            return updateObject(state, { signUpSuccess: false });
        case SIGN_UP.SUCCESS:
            return updateObject(state, { signUpSuccess: true });
        case CONFIRM_USER.REQUEST:
            return updateObject(state, { userNotConfirmed: true });
        case CONFIRM_USER.SUCCESS:
            return updateObject(state, { userNotConfirmed: false, isAuthorized : true, validationMessage : undefined });
        case CHECK_AUTH.REQUEST:
            return updateObject(state, { isAuthorized: false });
        case CHECK_AUTH.SUCCESS:
            return updateObject(state, { isAuthorized: true });
        case LOGOUT.REQUEST:
            return updateObject(state, { isAuthorized: true });
        case LOGOUT.SUCCESS:
            return updateObject(state, { isAuthorized: false, userData : undefined });


        default:
            return state;
    }
}


