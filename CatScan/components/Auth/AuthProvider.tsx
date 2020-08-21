import React from 'react';
import { _retrieveToken, _checkExpired } from '../../Auth/helpers/localStorage';

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
import Status from './Status/Status';
import Logout from './Logout/Logout'
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
import Pool from '../../Auth/configs/UserPool';

import AuthNavigator from '../Navigation/AuthNavigator/AuthNavigator';

interface OwnStateProps {
   
}


interface DispatchFromProps {

}

interface StateFromProps {

}


class AuthProvider extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

    }

    render() {

        const isAuthenticated = this.props.isAuthorized;

        const auth = (<NavigationContainer><AuthNavigator /></NavigationContainer>);

        return isAuthenticated ? this.props.children : auth;
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
        userData: state.auth.userData,
        isAuthorized: state.auth.isAuthorized
    };
};

export default connect<StateFromProps, DispatchFromProps, any, AppState>(mapStateToProps, {

})(AuthProvider);