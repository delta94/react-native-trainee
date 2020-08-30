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

export const getUserInfoSuccess = (data : any) => {
    return {
        type: GET_USER_INFO.SUCCESS,
        userAttributes: mapUserAttributes(data)
    };
};

const mapUserAttributes = (data : any) : UserAttributes => {
    return {
        phoneNumber : data['custom:custom:phoneNumber']
    } as UserAttributes
}


export const getUserInfo = () => {
    return (dispatch: any) => {
        dispatch(getUserInfoRequest());

        Auth.currentAuthenticatedUser()
            .then((user: any) => {
                getUserInfoSuccess(user.attributes);
                console.log('get user succ', user);
            })
            .catch(e => console.log('getUser err', e));
    }
}



