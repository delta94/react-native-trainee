
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute, ICognitoUserAttributeData } from 'amazon-cognito-identity-js';
import Pool from '../configs/UserPool';
import { _storeTokenAndExpired, _retrieveToken, _removeToken } from './localStorage';
import { Auth } from 'aws-amplify';

export const getSession = (): any => {
    return new Promise((resolve, reject) => {
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

export const authenticate = (Username: any, Password: any): any => {
    return new Promise((resolve, reject) => {

        // const user = new CognitoUser({ Username, Pool });
        // const authDetails = new AuthenticationDetails({ Username, Password });

        // user.authenticateUser(authDetails, {
        //     onSuccess: data => {
        //         console.log('onSuccess', data);

        //         _storeTokenAndExpired(data.getAccessToken().getJwtToken(), data.getIdToken().getExpiration().toString()); //we need to alhorithm to check stored token 

        //         resolve(data);
        //     },

        //     onFailure: err => {
        //         console.error('onFailure', err);
        //         reject(err);
        //     },

        //     newPasswordRequired: data => {
        //         console.log('newPasswordRequired', data)
        //         return data;
        //     }
        // })

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

export const signUp = (
    email: string,
    password: string,
    phoneNumber: string,
    firstName: string,
    lastName: string,
    companyName: string,
    zipCode: string
): any => {

    let attributeList: CognitoUserAttribute[] = [];

    const dataPhoneNumber: ICognitoUserAttributeData = {
        Name: 'custom:custom:phoneNumber',
        Value: phoneNumber
    };
    const dataFirstName: ICognitoUserAttributeData = {
        Name: 'custom:firstName',
        Value: firstName
    };
    const dataLastName: ICognitoUserAttributeData = {
        Name: 'custom:lastName',
        Value: lastName
    };
    const dataCompanyName: ICognitoUserAttributeData = {
        Name: 'custom:companyName',
        Value: companyName
    };
    const dataZipCode: ICognitoUserAttributeData = {
        Name: 'custom:zipCode',
        Value: zipCode
    };
    const dataEmail: ICognitoUserAttributeData = {
        Name: 'email',
        Value: email
    };

    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    const attributeFirstName = new CognitoUserAttribute(dataFirstName);
    const attributeLastName = new CognitoUserAttribute(dataLastName);
    const attributeCompanyName = new CognitoUserAttribute(dataCompanyName);
    const attributeZipCode = new CognitoUserAttribute(dataZipCode);
    const attributeEmail = new CognitoUserAttribute(dataEmail);

    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);
    attributeList.push(attributeCompanyName);
    attributeList.push(attributeZipCode);
    attributeList.push(attributeEmail);

    return new Promise((resolve, reject) => {

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
            .then(() => {
                console.log('successful sign up!')
                resolve();
            })
            .catch(err => {
                console.log('error signing up!: ', err)
                reject(err);
            });

    })
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