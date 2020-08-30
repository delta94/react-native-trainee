import { getActionFailed } from '../../reducers';
import { Auth } from 'aws-amplify';


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
        let user = undefined;

        Auth.currentAuthenticatedUser()
            .then(d => {
                console.log(d);
                user = d;
            })
            .catch(e => console.log(e));

        Auth.updateUserAttributes(user, {
            'custom:custom:phoneNumber': phoneNumber,
            'custom:firstName': firstName,
            'custom:lastName': lastName,
            'custom:companyName': companyName,
            'custom:zipCode': zipCode,
        }).then((data: any) => {
            dispatch(updateUserAttributesSuccess())
            console.log(data);
        })
            .catch((error: any) => {
                dispatch(getActionFailed(error.message));
                console.log(error);
            });
    }
}



