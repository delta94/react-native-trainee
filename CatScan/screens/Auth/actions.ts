
import { authenticate as login } from '../../Auth/helpers/accounts';

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

export const authenticateSuccess = (response: any) => {
    return {
        type: AUTHENTICATE.SUCCESS,
        userData : response
    };
};


export const authenticate = (email: string, password : string) => {
    return (dispatch: any) => {
        dispatch(authenticateRequest());
        login(email, password)
            .then(response => {
                dispatch(authenticateSuccess(response));
            })
            .catch((error: any) => {
                console.log('ERROR: ',error.response);  //wii be antd alert with good design
            });
    };
};



