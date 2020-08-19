
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

export const _removeToken = async () => {
    try {
        await AsyncStorage.removeItem(
            'accessToken'
        );
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