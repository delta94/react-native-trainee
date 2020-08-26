
import { authenticate, signUp as registrate, confirmUser as confirmUserAccount } from '../../Auth/helpers/accounts';
import { getActionFailed } from '../../reducers';
import { Auth } from 'aws-amplify';

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
        validationMessage: validationMessage,
        userName: ''
    };
}
export const notAuthorized = (validationMessage: string) => {
    return {
        type: AUTHENTICATE_FAIL.NOT_AUTHORIZED_EXCEPTION,
        validationMessage: validationMessage
    };
}

export const login = (email: string, password: string) => {
    return (dispatch: any) => {

        //dispatch(authenticateRequest());
        Auth.signIn(email, password)
            .then(data => {
                console.log('successful sign in!', data);
                dispatch(authenticateSuccess());
            })
            .catch(error => {
                console.log('error signing in!: ', error)
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

export const confirmUser = (code: string, userName: string) => {
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


//check auth

export enum CHECK_AUTH {
    REQUEST = 'CHECK_AUTH_REQUEST',
    SUCCESS = 'CHECK_AUTH_SUCCESS',
}
export const checkAuthorizationRequest = () => {
    return {
        type: CHECK_AUTH.REQUEST
    };
};

export const checkAuthorizationSuccess = () => {
    return {
        type: CHECK_AUTH.SUCCESS
    };
};

export const checkAuthorization = () => {
    return (dispatch: any) => {
        dispatch(checkAuthorizationRequest());

        Auth.currentAuthenticatedUser()
            .then((data: any) => {
                dispatch(checkAuthorizationSuccess());
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
            });

    }
}
//logout

export enum LOGOUT {
    REQUEST = 'LOGOUT_REQUEST',
    SUCCESS = 'LOGOUT_SUCCESS',
}
export const logoutRequest = () => {
    return {
        type: LOGOUT.REQUEST
    };
};

export const logoutSuccess = () => {
    return {
        type: LOGOUT.SUCCESS
    };
};

export const logout = () => {
    return (dispatch: any) => {

        dispatch(logoutRequest());
        Auth.signOut()
            .then(data => {
                dispatch(logoutSuccess());
                console.log('LOGOUT SUCCESS');
            })
            .catch(error => {
                dispatch(getActionFailed(error.message));

                console.log('LOGOUT Failed');
            });

    }
}




