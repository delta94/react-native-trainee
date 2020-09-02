

import { getActionFailed } from '../../reducers';
import { Auth } from 'aws-amplify';

//authenticate
export enum AUTHENTICATE {
    REQUEST = 'AUTHENTICATE_REQUEST',
    SUCCESS = 'AUTHENTICATE_SUCCESS',
}


export const authenticateRequest = (userName: string) => {
    return {
        type: AUTHENTICATE.REQUEST,
        userName: userName
    };
};

export const authenticateSuccess = (userName: string) => {

    return {
        type: AUTHENTICATE.SUCCESS,
        userName: userName
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

        dispatch(authenticateRequest(email));
        Auth.signIn(email, password)
            .then(data => {
                console.log('successful sign in!', data);
                dispatch(authenticateSuccess(email));
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
export const signUpRequest = (userName: string) => {
    return {
        type: SIGN_UP.REQUEST,
        userName: userName
    };
};

export const signUpSuccess = (userName: string, password: string) => {

    return {
        type: SIGN_UP.SUCCESS,
        userName: userName,
        password: password
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
        dispatch(signUpRequest(email));

        Auth.signUp({
            username: email,
            password: password,
            attributes: {
                email: email,
                'custom:custom:phoneNumber': phoneNumber,
                'custom:firstName': firstName,
                'custom:lastName': lastName,
                'custom:companyName': companyName,
                'custom:zipCode': zipCode,
            },
        })
            .then((data: any) => {
                console.log('sign up success', data);
                dispatch(signUpSuccess(email, password))
            })
            .catch((error: any) => {
                console.log('sign up error', error);
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
        dispatch(confirmUserRequest());

        Auth.confirmSignUp(userName, code)
            .then((data: any) => {
                dispatch(confirmUserSuccess());
                console.log(data)
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
                console.log(error)

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
            })
            .catch(error => {
                dispatch(getActionFailed(error.message));
            });

    }
}

//Forgot Password

export enum FORGOT_PASSWORD {
    REQUEST = 'FORGOT_PASSWORD_REQUEST',
    SUCCESS = 'FORGOT_PASSWORD_SUCCESS',
}
export const forgotPasswordRequest = (userName: string) => {
    return {
        type: FORGOT_PASSWORD.REQUEST,
        userName: userName
    };
};

export const forgotPasswordSuccess = () => {

    return {
        type: FORGOT_PASSWORD.SUCCESS
    };
};

export const forgotPassword = (userName: string) => {

    return (dispatch: any) => {
        dispatch(forgotPasswordRequest(userName));

        Auth.forgotPassword(userName)
            .then((data: any) => {
                console.log('forgotPassword succ');
                dispatch(forgotPasswordSuccess());
            })
            .catch((error: any) => {
                console.log('forgotPassword err');
                dispatch(getActionFailed(error.message));
            });
    }
}

//Forgot password submit

export enum FORGOT_PASSWORD_SUBMIT {
    REQUEST = 'FORGOT_PASSWORD_SUBMIT_REQUEST',
    SUCCESS = 'FORGOT_PASSWORD__SUBMITSUCCESS',
}
export const forgotPasswordSubmitRequest = (userName: string) => {
    return {
        type: FORGOT_PASSWORD_SUBMIT.REQUEST,
        userName: userName
    };
};

export const forgotPasswordSubmitSuccess = () => {

    return {
        type: FORGOT_PASSWORD_SUBMIT.SUCCESS
    };
};

export const forgotPasswordSubmit = (email: string, confirmationCode: string, newPassword: string) => {

    return (dispatch: any) => {
        dispatch(forgotPasswordSubmitRequest(email));

        Auth.forgotPasswordSubmit(email, confirmationCode, newPassword)
            .then((data: any) => {
                dispatch(forgotPasswordSubmitSuccess());
            })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
            });
    }
}

//clear all states

export enum CLEAR_ALL_STATES {
    CLEAR_ALL_STATES = 'CLEAR_ALL_STATES'
}
export const clearAllStatesAction = () => {
    return {
        type: CLEAR_ALL_STATES.CLEAR_ALL_STATES
    };
};

export const clearAllStates = () => {

    return (dispatch: any) => {
        dispatch(clearAllStatesAction());
    }
}

