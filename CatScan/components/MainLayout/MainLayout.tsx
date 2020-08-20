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
import Status from '../../components/Auth/Status/Status';
import Logout from '../../components/Auth/Logout/Logout'
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


interface OwnStateProps {
    email: string;
    password: string;
}


interface DispatchFromProps {

}

interface StateFromProps {

}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

class MainLayout extends React.Component<any & any & any, OwnStateProps> {

    constructor(props: any) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    onLogout = (event: any) => {
        event.preventDefault();
        //clear

    }
    navigateToSignUp = () => {

    }

    render() {

        const auth = (
            <Stack.Navigator
                initialRouteName='Login'
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="SignUp" component={SignUp} />
                <Stack.Screen name="ForgotPassword" component={ForgotPassword} />

            </Stack.Navigator>
        );

        const app = (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {

                        color = focused ? 'red' : color;

                        if (route.name === 'Home') {
                            return <SimpleLineIcons name={'home'} size={size} color={color} />;
                        }
                        if (route.name === 'Search') {
                            return <Octicons name={'search'} size={size} color={color} />;
                        }
                        if (route.name === 'Settings') {
                            return <Feather name={'settings'} size={size} color={color} />;
                        }
                        if (route.name === 'BlueButton') {
                            return <FontAwesome5 name={'football-ball'} size={size} color={'blue'} />;
                        }
                        if (route.name === 'Car') {
                            return <FontAwesome name={'car'} size={size} color={color} />;
                        }
                    },
                })}
                tabBarOptions={{
                    activeTintColor: 'tomato',
                    inactiveTintColor: 'gray'
                }}
                initialRouteName="Home"
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Search" component={Home} />
                <Tab.Screen name="BlueButton" component={Home} />
                <Tab.Screen name="Car" component={Home} />
                <Tab.Screen name="Settings" component={Settings} />

            </Tab.Navigator>
        );

        const isAuthinticated = true;

        return (
            <NavigationContainer>
                {!isAuthinticated ? auth : app}
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

})(MainLayout);