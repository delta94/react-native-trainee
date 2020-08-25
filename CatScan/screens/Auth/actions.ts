
import { authenticate as login, signUp as registrate, confirmUser as confirmUserAccount } from '../../Auth/helpers/accounts';
import { getActionFailed } from '../../reducers';


//authenticate
export enum AUTHENTICATE {
    REQUEST = 'AUTHENTICATE_REQUEST',
    SUCCESS = 'AUTHENTICATE_SUCCESS',
}


export const authenticateRequest = () => {
    return {
        type: AUTHENTICATE.REQUEST
    };
};

export const authenticateSuccess = () => {

    return {
        type: AUTHENTICATE.SUCCESS
    };
};


//authenticate fails
export enum AUTHENTICATE_FAIL {
    USER_NOT_CONFIRMED_EXCEPTION = 'USER_NOT_CONFIRMED_EXCEPTION',
    NOT_AUTHORIZED_EXCEPTION = 'NOT_AUTHORIZED_EXCEPTION'

}

const authenticateFail = (dispatch: any, error: any, email : string) => {

    if (error.code === 'UserNotConfirmedException') {
        dispatch(userNotconfirmed(error.message, email));
    }
    else if (error.code === 'NotAuthorizedException') {
        dispatch(notAuthorized(error.message))
    }
    else {
        dispatch(getActionFailed(error.message))
    }

}


export const userNotconfirmed = (validationMessage: string, userName : string) => {
    return {
        type: AUTHENTICATE_FAIL.USER_NOT_CONFIRMED_EXCEPTION,
        validationMessage: validationMessage,
        userName : userName
    };
}
export const notAuthorized = (validationMessage: string) => {
    return {
        type: AUTHENTICATE_FAIL.NOT_AUTHORIZED_EXCEPTION,
        validationMessage: validationMessage
    };
}

export const authenticate = (email: string, password: string) => {
    return (dispatch: any) => {
        dispatch(authenticateRequest());
        login(email, password)
            .then((data: any) => {
                dispatch(authenticateSuccess());
            })
            .catch((error: any) => {
                authenticateFail(dispatch, error, email)
            });
    };
};


//Sign Up

export enum SIGN_UP {
    REQUEST = 'SIGN_UP_REQUEST',
    SUCCESS = 'SIGN_UP_SUCCESS',
}
export const signUpRequest = () => {
    return {
        type: SIGN_UP.REQUEST
    };
};

export const signUpSuccess = () => {

    return {
        type: SIGN_UP.SUCCESS
    };
};


export const signUp = (
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    companyName: string,
    zipCode: string
) => {
    return (dispatch: any) => {
        dispatch(signUpRequest());
        registrate(email, password, phoneNumber, firstName, lastName, companyName, zipCode)
            .then((data: any) => {
                dispatch(signUpSuccess())
                dispatch(authenticate(email, password));
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
            });
    }
}
//Confirm User

export enum CONFIRM_USER {
    REQUEST = 'CONFIRM_USER_REQUEST',
    SUCCESS = 'CONFIRM_USER_SUCCESS',
}
export const confirmUserRequest = () => {
    return {
        type: CONFIRM_USER.REQUEST
    };
};

export const confirmUserSuccess = () => {

    return {
        type: CONFIRM_USER.SUCCESS
    };
};

export const confirmUser = (code: string, userName : string) => {
    return (dispatch: any) => {
        dispatch(signUpRequest());

        confirmUserAccount(code, userName)
            .then((data: any) => {
                dispatch(signUpSuccess())
                dispatch(confirmUserSuccess());
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
            });
    }
}




