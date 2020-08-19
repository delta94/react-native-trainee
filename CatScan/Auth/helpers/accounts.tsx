
import { CognitoUser, AuthenticationDetails } from 'amazon-cognito-identity-js';
import Pool from '../configs/UserPool';
import { _storeToken } from './localStorage';


export const getSession = async () => {
    await new Promise((resolve, reject) => {
        const user = Pool.getCurrentUser();

        if (user) {
            user.getSession((err: any, session: any) => {
                if (err) {
                    reject();
                }
                else {
                    console.log('getSession1', session);
                    resolve(session);
                    
                }
            })
        } else {
            reject();
        }
    });
}

export const authenticate = async (Username: any, Password: any) => {
    await new Promise((resolve, reject) => {

        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess', data);
                //_storeToken(data);
                console.log('Puser');

                resolve(data);
                return data;
            },

            onFailure: err => {
                console.error('onFailure', err);
                reject(err);
                return err;
            },

            newPasswordRequired: data => {
                console.log('newPasswordRequired', data)
                return data;
            }
        })
    })
}

export const logout = () => {
    const user = Pool.getCurrentUser();
    if (user) {
        console.log('logout:  ',user);
        user.signOut();
    }
}
