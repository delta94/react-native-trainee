
import { AUTHENTICATE, AUTHENTICATE_FAIL, SIGN_UP, CONFIRM_USER, CHECK_AUTH, LOGOUT, FORGOT_PASSWORD, FORGOT_PASSWORD_SUBMIT, CLEAR_ALL_STATES } from './actions';
import updateObject from '../../helpers/updateObject';
import { GET_ACTION_FAIL } from '../../reducers';
import { UPDATE_USER_ATTRIBUTES, GET_USER_INFO } from '../Settings/actions';


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
    userAttributes?: UserAttributes;
    isUserAttributesUpdated: boolean
}

export interface UserAttributes {
    phoneNumber: string;
    firstName: string;
    lastName: string;
    companyName: string;
    zipCode: string;
}

const initialState: AuthState = {
    isAuthorized: false,
    userNotConfirmed: false,
    userAttributes: undefined,
    errorMessage: undefined,
    isError: false,
    validationMessage: undefined,
    userName: undefined,
    signUpSuccess: false,
    isForgotPasswordActive: false,
    isUserAttributesUpdated: false


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
        case CLEAR_ALL_STATES.CLEAR_ALL_STATES:
            return updateObject(state, { ...initialState })
        case GET_USER_INFO.REQUEST:
            return updateObject(state, { userAttributes : undefined })
        case GET_USER_INFO.SUCCESS:
            return updateObject(state, { userAttributes : action.userAttributes })
        default:
            return state;
    }
}


