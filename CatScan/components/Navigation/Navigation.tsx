import React from 'react';

import { connect } from 'react-redux';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    Alert,
    Image

} from 'react-native';

import { AppState } from '../../reducers';

import { Button, InputItem } from '@ant-design/react-native';
import { Input } from 'react-native-elements';
import SignUp from '../../screens/Auth/SignUp/SignUp';
import Login from '../../screens/Auth/Login/Login';
import Status from '../Auth/Status/Status';
import Logout from '../Auth/Logout/Logout'
import ForgotPassword from '../../screens/Auth/ForgotPassword/ForgotPasword';
import Home from '../../screens/Home/Home';
import Settings from '../../screens/Settings/Settings';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import AppNavigator from './AppNavigator/AppNavigator';;
import AuthNavigator from './AuthNavigator/AuthNavigator';

interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}


class Navigation extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }
  
    render() {

        const isAuthinticated = false;

        return (
            <NavigationContainer>
                {!isAuthinticated ? <AuthNavigator /> :  <AppNavigator />}
            </NavigationContainer>
        );
    }
};


const styles = StyleSheet.create({
    logoutContainer: {

    },
    logoutButton: {
        marginTop: 100
    }
});

const mapStateToProps = (state: AppState): StateFromProps => {
    return {
        userData: state.auth.userData
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(Navigation);