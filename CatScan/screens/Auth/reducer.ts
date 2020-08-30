
import { AUTHENTICATE, AUTHENTICATE_FAIL, SIGN_UP, CONFIRM_USER, CHECK_AUTH, LOGOUT, FORGOT_PASSWORD, FORGOT_PASSWORD_SUBMIT } from './actions';
import updateObject from '../../helpers/updateObject';
import { GET_ACTION_FAIL } from '../../reducers';
import { UPDATE_USER_ATTRIBUTES } from '../Settings/actions';


export interface AuthState {
    isAuthorized: boolean;
    userNotConfirmed: boolean;
    userName?: string;
    errorMessage?: string
    isError?: boolean;
    validationMessage?: string;
    signUpSuccess?: boolean;
    isForgotPasswordActive?: boolean;
    isPasswordChanged?: boolean;
    userData?: UserData;
}

export interface UserData {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    companyName: string;
    zipCode: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    userNotConfirmed: false,
    userData: undefined
}

export const reducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_ACTION_FAIL.GET_ACTION_FAIL:
            return updateObject(state, { isError: true, errorMessage: action.errorMessage });
        case AUTHENTICATE.REQUEST:
            return updateObject(state, { isAuthorized: false, userNotConfirmed: false, validationMessage: undefined, userName: action.userName });
        case AUTHENTICATE.SUCCESS:
            return updateObject(state, { isAuthorized: true, validationMessage: undefined });
        case AUTHENTICATE_FAIL.USER_NOT_CONFIRMED_EXCEPTION:
            return updateObject(state, { userNotConfirmed: true, validationMessage: action.validationMessage });
        case AUTHENTICATE_FAIL.NOT_AUTHORIZED_EXCEPTION:
            return updateObject(state, { validationMessage: action.validationMessage });
        case SIGN_UP.REQUEST:
            return updateObject(state, { signUpSuccess: false, userName: action.UserName });
        case SIGN_UP.SUCCESS:
            return updateObject(state, { signUpSuccess: true, userName: action.UserName });
        case CONFIRM_USER.REQUEST:
            return updateObject(state, { userNotConfirmed: true });
        case CONFIRM_USER.SUCCESS:
            return updateObject(state, { userNotConfirmed: false, isAuthorized: true, validationMessage: undefined });
        case CHECK_AUTH.REQUEST:
            return updateObject(state, { isAuthorized: false });
        case CHECK_AUTH.SUCCESS:
            return updateObject(state, { isAuthorized: true });
        case LOGOUT.REQUEST:
            return updateObject(state, { isAuthorized: true });
        case LOGOUT.SUCCESS:
            return updateObject(state, { isAuthorized: false, userName: undefined });
        case FORGOT_PASSWORD.REQUEST:
            return updateObject(state, { isForgotPasswordActive: false, userName: action.userName });
        case FORGOT_PASSWORD.SUCCESS:
            return updateObject(state, { isForgotPasswordActive: true });
        case FORGOT_PASSWORD_SUBMIT.REQUEST:
            return updateObject(state, { isForgotPasswordActive: true, userName: action.userName });
        case FORGOT_PASSWORD_SUBMIT.SUCCESS:
            return updateObject(state, { isForgotPasswordActive: false, isPasswordChanged: true });
        case UPDATE_USER_ATTRIBUTES.REQUEST:
            return updateObject(state, { isUserAttributesUpdated: false });
        case UPDATE_USER_ATTRIBUTES.SUCCESS:
            return updateObject(state, { isUserAttributesUpdated: true });


        default:
            return state;
    }
}


