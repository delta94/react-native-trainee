
import { AsyncStorage } from 'react-native';

export const _storeToken = async (token: any) => {
    try {
        await AsyncStorage.setItem(
            'accessToken',
            token
        );
    } catch (error) {
        console.log('Error when store token : ', error);
    }
};
export const _storeTokenAndExpired = async (token: string, expired : string) => {
    try {
        await AsyncStorage.setItem('accessToken', token), () => AsyncStorage.setItem('expired', expired);
    } catch (error) {
        console.log('Error when store token : ', error);
    }
};
export const _checkExpired = async () => {
    try {
        const expired = await AsyncStorage.getItem('expired');
        return expired;
    } catch (error) {
        console.log('Error when get expired info : ', error);
    }
};

export const _removeToken = async () => {
    try {
        await AsyncStorage.multiRemove(['accessToken', 'expired']);
    } catch (error) {
        console.log('Error when remove token : ', error);
    }
};

export const _retrieveToken = async () => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token !== null) {
        console.log(token);
        return token;
      }
    } catch (error) {
      console.log('Error when get token : ', error);
    }
  };