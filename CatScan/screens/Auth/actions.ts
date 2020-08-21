
import { authenticate as login, signUp as registrate } from '../../Auth/helpers/accounts';
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

const authenticateFail = (dispatch: any, error: any) => {

    if (error.code === 'UserNotConfirmedException') {
        dispatch(userNotconfirmed(error.message));
    }
    else if (error.code === 'NotAuthorizedException') {
        dispatch(notAuthorized(error.message))
    }
    else {
        dispatch(getActionFailed(error.message))
    }

}


export const userNotconfirmed = (validationMessage: string) => {
    return {
        type: AUTHENTICATE_FAIL.USER_NOT_CONFIRMED_EXCEPTION,
        validationMessage: validationMessage
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
                authenticateFail(dispatch, error)
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
                console.log(email, password, 'run auth!');
                dispatch(signUpSuccess())
                dispatch(authenticate(email, password));
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
            });
    }
}




