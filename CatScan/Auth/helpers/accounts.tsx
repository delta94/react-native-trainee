
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute, ICognitoUserAttributeData } from 'amazon-cognito-identity-js';
import Pool from '../configs/UserPool';
import { _storeTokenAndExpired, _retrieveToken, _removeToken } from './localStorage';
import { Auth } from 'aws-amplify';

export const authenticate = (Username: any, Password: any): any => {
    return new Promise((resolve, reject) => {

        try {
            const user = Auth.signIn(Username, Password);

            console.log("auth succeess");
            Auth.userSession(user);

            resolve(user);
        }
        catch (error) {
            console.log('error signing in', error);
        }

    })
}

export const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        console.log('logout:  ', user);
        user.signOut();
    }
}

export const confirmUser = (code: string, Username: string): any => {
    return new Promise((resolve, reject) => {

        const user = new CognitoUser({ Username, Pool });

        user.confirmRegistration(code, false, (err, data) => {
            if (err) {
                reject(err), console.log(err);
            } else {
                resolve(data), console.log(data, 'yep')
            }

        });
    });
}

export const resendConfirmationCode = (Username: string): any => {
    return new Promise((resolve, reject) => {

        const user = new CognitoUser({ Username, Pool });

        user.resendConfirmationCode(() => null);
    });
}