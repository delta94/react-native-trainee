
import { CognitoUser, AuthenticationDetails, CognitoUserAttribute, ICognitoUserAttributeData } from 'amazon-cognito-identity-js';
import Pool from '../configs/UserPool';
import { _storeTokenAndExpired, _retrieveToken, _removeToken } from './localStorage';

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

        const user = new CognitoUser({ Username, Pool });
        const authDetails = new AuthenticationDetails({ Username, Password });

        user.authenticateUser(authDetails, {
            onSuccess: data => {
                console.log('onSuccess', data);

                _storeTokenAndExpired(data.getAccessToken().getJwtToken(), data.getIdToken().getExpiration().toString()); //we need to alhorithm to check stored token 
                
                resolve(data);
            },

            onFailure: err => {
                console.error('onFailure', err);
                reject(err);
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
        Name: 'custom:phoneNumber',
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

    const attributePhoneNumber = new CognitoUserAttribute(dataPhoneNumber);
    const attributeFirstName = new CognitoUserAttribute(dataFirstName);
    const attributeLastName = new CognitoUserAttribute(dataLastName);
    const attributeCompanyName = new CognitoUserAttribute(dataCompanyName);
    const attributeZipCode = new CognitoUserAttribute(dataZipCode);

    attributeList.push(attributePhoneNumber);
    attributeList.push(attributeFirstName);
    attributeList.push(attributeLastName);
    attributeList.push(attributeCompanyName);
    attributeList.push(attributeZipCode);

    return new Promise((resolve, reject) => {
        //attributes is not working

        Pool.signUp(email, password, [], [], (err, data) => {
            if (err) reject(err), console.log(err);
            resolve(data); console.log('success', data);
        });


        //way to using custom attributes

        // let user = Pool.getCurrentUser();
        // console.log(user);
        // if (user) {
        //     user.updateAttributes(attributeList, (err: any, result: any) => {
        //         if (err) console.log(err);
        //         console.log('updateAttributesSuccess', result);
        //     })
        // }

    })
}