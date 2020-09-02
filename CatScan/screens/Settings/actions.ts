import { getActionFailed } from '../../reducers';
import { Auth } from 'aws-amplify';
import { UserAttributes } from '../Auth/reducer';


//edit profile (aws cognito attributes)

export enum UPDATE_USER_ATTRIBUTES {
    REQUEST = 'UPDATE_USER_ATTRIBUTES_REQUEST',
    SUCCESS = 'UPDATE_USER_ATTRIBUTES_SUCCESS'
}
export const updateUserAttributesRequest = () => {
    return {
        type: UPDATE_USER_ATTRIBUTES.REQUEST
    };
};

export const updateUserAttributesSuccess = () => {

    return {
        type: UPDATE_USER_ATTRIBUTES.SUCCESS
    };
};


export const updateUserAttributes = (
    phoneNumber: string,
    firstName: string,
    lastName: string,
    companyName: string,
    zipCode: string
) => {
    return (dispatch: any) => {
        dispatch(updateUserAttributesRequest());

        Auth.currentAuthenticatedUser()
            .then((user: any) => {
                console.log('get user succ', user);

                Auth.updateUserAttributes(user, {
                    'custom:custom:phoneNumber': phoneNumber,
                    'custom:firstName': firstName,
                    'custom:lastName': lastName,
                    'custom:companyName': companyName,
                    'custom:zipCode': zipCode,
                }).then((data: any) => {
                    dispatch(updateUserAttributesSuccess())
                    getUserInfo();
                    console.log('updateUserAttributes succ', data);
                })
                    .catch((error: any) => {
                        dispatch(getActionFailed(error.message));
                        console.log('updateUserAttributes err', error);
                    });
            })
            .catch(r => console.log('getUser err', r));
    }
}

//get user info 

export enum GET_USER_INFO {
    REQUEST = 'GET_USER_INFO_REQUEST',
    SUCCESS = 'GET_USER_INFO_SUCCESS'
}
export const getUserInfoRequest = () => {

    return {
        type: GET_USER_INFO.REQUEST

    };
};

export const getUserInfoSuccess = (data: any) => {
    return {
        type: GET_USER_INFO.SUCCESS,
        userAttributes: mapUserAttributes(data)
    };
};

const mapUserAttributes = (data: any): UserAttributes => {
    return {
        phoneNumber: data['custom:custom:phoneNumber'] ? data['custom:custom:phoneNumber'] : '',
        companyName: data['custom:companyName'] ? data['custom:companyName'] : '',
        firstName: data['custom:firstName'] ? data['custom:firstName'] : '',
        lastName: data['custom:lastName'] ? data['custom:lastName'] : '',
        zipCode:  data['custom:zipCode'] ? data['custom:zipCode'] : ''
    } as UserAttributes
}


export const getUserInfo = () => {
    return (dispatch: any) => {
        dispatch(getUserInfoRequest());

        Auth.currentAuthenticatedUser()
            .then((user: any) => {
                dispatch(getUserInfoSuccess(user.attributes));
                console.log('get user attr succ', user.attributes);
            })
            .catch(e => console.log('get User attr err', e));
    }
}



